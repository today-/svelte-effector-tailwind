import {createEffect, createStore} from 'effector';

export const createService = (asyncFn, initialState = null) => {
  const effect = createEffect({handler: asyncFn});

  const loading = createStore(false)
    .on(effect, () => true)
    .on(effect.finally, () => false);

  const error = createStore(null)
    .on(effect, () => null)
    .on(effect.fail, (_, {error}) => typeof error === 'object' ? error.message : error);

  const result = createStore(initialState)
    .on(effect.done, (_, {result}) => result);

  return {effect, loading, error, result};
};
