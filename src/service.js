import {createEffect, createStore} from 'effector';

export const createService = (
  asyncFn,
  initialState = null,
  onSuccessCallback = (_, {result}) => result
) => {
  const effect = createEffect({handler: asyncFn});

  const loading = createStore(false)
    .on(effect, () => true)
    .on(effect.finally, () => false);

  const error = createStore(null)
    .on(effect, () => null)
    .on(effect.fail, (_, {error}) => typeof error === 'object' ? error.message : error);

  const result = createStore(initialState)
    .on(effect.done, onSuccessCallback);

  return {effect, loading, error, result};
};
