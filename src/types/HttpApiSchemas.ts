import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyParams } from './AnyParams';
import type { AnyQuery } from './AnyQuery';
import type { AnyStatus } from './AnyStatus';
import type { RequestSchemas } from './RequestSchemas';
import type { ResponseSchemas } from './ResponseSchemas';

/** HttpApi schemas used for requests and responses */
export interface HttpApiSchemas<
  ReqHeadersT extends AnyHeaders,
  ReqParamsT extends AnyParams,
  ReqQueryT extends AnyQuery,
  ReqBodyT extends AnyBody,
  ResStatusT extends AnyStatus,
  ResHeadersT extends AnyHeaders,
  ResBodyT extends AnyBody,
  ErrResStatusT extends AnyStatus,
  ErrResHeadersT extends AnyHeaders,
  ErrResBodyT extends AnyBody
> {
  request: RequestSchemas<ReqHeadersT, ReqParamsT, ReqQueryT, ReqBodyT>;
  successResponse: ResponseSchemas<ResStatusT, ResHeadersT, ResBodyT>;
  failureResponse?: ResponseSchemas<ErrResStatusT, ErrResHeadersT, ErrResBodyT>;
}
