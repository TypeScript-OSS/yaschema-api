import type { HttpApi } from '../HttpApi';

export type InferHttpRequestHeadersType<T> =
  T extends HttpApi<
    infer ReqHeadersT,
    infer _ReqParamsT,
    infer _ReqQueryT,
    infer _ReqBodyT,
    infer _ResStatusT,
    infer _ResHeadersT,
    infer _ResBodyT,
    infer _ErrResStatusT,
    infer _ErrResHeadersT,
    infer _ErrResBodyT
  >
    ? ReqHeadersT
    : never;
