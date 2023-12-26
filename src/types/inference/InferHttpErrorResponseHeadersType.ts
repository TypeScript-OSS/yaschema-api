import type { HttpApi } from '../HttpApi';

export type InferHttpErrorResponseHeadersType<T> = T extends HttpApi<
  infer _ReqHeadersT,
  infer _ReqParamsT,
  infer _ReqQueryT,
  infer _ReqBodyT,
  infer _ResStatusT,
  infer _ResHeadersT,
  infer _ResBodyT,
  infer _ErrResStatusT,
  infer ErrResHeadersT,
  infer _ErrResBodyT
>
  ? ErrResHeadersT
  : never;
