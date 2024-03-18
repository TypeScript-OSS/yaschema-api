import type { HttpApi } from '../HttpApi';

export type InferHttpSuccessResponseBodyType<T> =
  T extends HttpApi<
    infer _ReqHeadersT,
    infer _ReqParamsT,
    infer _ReqQueryT,
    infer _ReqBodyT,
    infer _ResStatusT,
    infer _ResHeadersT,
    infer ResBodyT,
    infer _ErrResStatusT,
    infer _ErrResHeadersT,
    infer _ErrResBodyT
  >
    ? ResBodyT
    : never;
