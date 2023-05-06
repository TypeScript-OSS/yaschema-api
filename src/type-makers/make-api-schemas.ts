import type { AnyBody } from '../types/AnyBody';
import type { AnyHeaders } from '../types/AnyHeaders';
import type { AnyParams } from '../types/AnyParams';
import type { AnyQuery } from '../types/AnyQuery';
import type { AnyStatus } from '../types/AnyStatus';
import type { HttpApiSchemas } from '../types/HttpApiSchemas';

export const makeApiSchemas = <
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
>(
  schemas: HttpApiSchemas<
    ReqHeadersT,
    ReqParamsT,
    ReqQueryT,
    ReqBodyT,
    ResStatusT,
    ResHeadersT,
    ResBodyT,
    ErrResStatusT,
    ErrResHeadersT,
    ErrResBodyT
  >
) => schemas;
