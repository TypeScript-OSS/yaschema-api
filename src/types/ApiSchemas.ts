import type { SingleOrArray } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';
import type { RequestSchemas } from './RequestSchemas';
import type { ResponseSchemas } from './ResponseSchemas';

/** Api schemas used for requests and responses */
export interface ApiSchemas<
  ReqHeadersT extends Record<string, AnyStringSerializableType>,
  ReqParamsT extends Record<string, AnyStringSerializableType>,
  ReqQueryT extends Record<string, SingleOrArray<AnyStringSerializableType>>,
  ReqBodyT,
  ResStatusT extends number,
  ResHeadersT extends Record<string, AnyStringSerializableType>,
  ResBodyT,
  ErrResStatusT extends number,
  ErrResHeadersT extends Record<string, AnyStringSerializableType>,
  ErrResBodyT
> {
  request: RequestSchemas<ReqHeadersT, ReqParamsT, ReqQueryT, ReqBodyT>;
  successResponse: ResponseSchemas<ResStatusT, ResHeadersT, ResBodyT>;
  failureResponse?: ResponseSchemas<ErrResStatusT, ErrResHeadersT, ErrResBodyT>;
}
