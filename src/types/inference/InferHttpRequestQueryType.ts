import type { HttpApi } from '../HttpApi';

export type InferHttpRequestQueryType<T> =
  T extends HttpApi<
    infer _ReqHeadersT,
    infer _ReqParamsT,
    infer ReqQueryT,
    infer _ReqBodyT,
    infer _ResStatusT,
    infer _ResHeadersT,
    infer _ResBodyT,
    infer _ErrResStatusT,
    infer _ErrResHeadersT,
    infer _ErrResBodyT
  >
    ? ReqQueryT
    : never;
