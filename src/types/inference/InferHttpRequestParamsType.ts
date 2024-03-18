import type { HttpApi } from '../HttpApi';

export type InferHttpRequestParamsType<T> =
  T extends HttpApi<
    infer _ReqHeadersT,
    infer ReqParamsT,
    infer _ReqQueryT,
    infer _ReqBodyT,
    infer _ResStatusT,
    infer _ResHeadersT,
    infer _ResBodyT,
    infer _ErrResStatusT,
    infer _ErrResHeadersT,
    infer _ErrResBodyT
  >
    ? ReqParamsT
    : never;
