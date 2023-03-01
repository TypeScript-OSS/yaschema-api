import type { AnyBody } from '../types/AnyBody';
import type { AnyHeaders } from '../types/AnyHeaders';
import type { AnyParams } from '../types/AnyParams';
import type { AnyQuery } from '../types/AnyQuery';
import type { RequestSchemas } from '../types/RequestSchemas';

export const makeRequestSchemas = <HeadersT extends AnyHeaders, ParamsT extends AnyParams, QueryT extends AnyQuery, BodyT extends AnyBody>(
  schemas: RequestSchemas<HeadersT, ParamsT, QueryT, BodyT>
) => schemas;
