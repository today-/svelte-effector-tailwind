import {createEffect, createStore} from 'effector';

export const loadingReducer = (state)=> ({
  ...state,
  loading: true,
  error: null
});

export const successReducer = (state, {result}) => ({
  ...state,
  loading: false,
  error: null,
  result
});

export const errorReducer = (state, {error}) => ({
  ...state,
  loading: false,
  error: typeof error === 'object' ? error.message : error
});

export const initialServiceState = {
  loading: false,
  result: null,
  error: null
};

export const createServiceStore = (
  effect,
  initialResult = null,
  onSuccessCallback = successReducer
) =>
  createStore({...initialServiceState, result: initialResult})
    .on(effect, loadingReducer)
    .on(effect.done, onSuccessCallback)
    .on(effect.fail, errorReducer);

export const createServiceEffect = (asyncFn, name) =>
  createEffect({name, handler: asyncFn});
