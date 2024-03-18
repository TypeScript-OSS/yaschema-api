import type { HttpApi } from '../HttpApi';

export type InferHttpErrorResponseStatusType<T> =
  T extends HttpApi<
    infer _ReqHeadersT,
    infer _ReqParamsT,
    infer _ReqQueryT,
    infer _ReqBodyT,
    infer _ResStatusT,
    infer _ResHeadersT,
    infer _ResBodyT,
    infer ErrResStatusT,
    infer _ErrResHeadersT,
    infer _ErrResBodyT
  >
    ? ErrResStatusT
    : never;
