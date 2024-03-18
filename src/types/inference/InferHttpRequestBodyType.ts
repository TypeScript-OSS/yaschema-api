import type { HttpApi } from '../HttpApi';

export type InferHttpRequestBodyType<T> =
  T extends HttpApi<
    infer _ReqHeadersT,
    infer _ReqParamsT,
    infer _ReqQueryT,
    infer ReqBodyT,
    infer _ResStatusT,
    infer _ResHeadersT,
    infer _ResBodyT,
    infer _ErrResStatusT,
    infer _ErrResHeadersT,
    infer _ErrResBodyT
  >
    ? ReqBodyT
    : never;
