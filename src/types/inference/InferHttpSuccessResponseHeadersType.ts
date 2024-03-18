import type { HttpApi } from '../HttpApi';

export type InferHttpSuccessResponseHeadersType<T> =
  T extends HttpApi<
    infer _ReqHeadersT,
    infer _ReqParamsT,
    infer _ReqQueryT,
    infer _ReqBodyT,
    infer _ResStatusT,
    infer ResHeadersT,
    infer _ResBodyT,
    infer _ErrResStatusT,
    infer _ErrResHeadersT,
    infer _ErrResBodyT
  >
    ? ResHeadersT
    : never;
