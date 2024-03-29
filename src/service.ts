import {createEffect, createStore} from 'effector';

export const createService = <TResult, Params = null>(
  asyncFn: (() => Promise<TResult>) | ((p: Params) => Promise<TResult>),
  initialState: TResult = null,
  onSuccessCallback: (
      state: TResult,
      payload: { params: Params; result: TResult }
  ) => TResult = (_, {result}) => result
) => {
  const effect = createEffect<Params, TResult, string | any>({handler: asyncFn});

  const loading = createStore<boolean>(false)
    .on(effect, () => true)
    .on(effect.finally, () => false);

  const error = createStore(null)
    .on(effect, () => null)
    .on(effect.fail, (_, {error}) => typeof error === 'object' ? error.message : error);

  const result = createStore<TResult>(initialState)
    .on(effect.done, onSuccessCallback);

  return {effect, loading, error, result};
};
