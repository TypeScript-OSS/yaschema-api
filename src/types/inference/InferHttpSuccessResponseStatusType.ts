import type { HttpApi } from '../HttpApi';

export type InferHttpSuccessResponseStatusType<T> = T extends HttpApi<
  infer _ReqHeadersT,
  infer _ReqParamsT,
  infer _ReqQueryT,
  infer _ReqBodyT,
  infer ResStatusT,
  infer _ResHeadersT,
  infer _ResBodyT,
  infer _ErrResStatusT,
  infer _ErrResHeadersT,
  infer _ErrResBodyT
>
  ? ResStatusT
  : never;
