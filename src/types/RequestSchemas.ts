import type { Schema } from 'yaschema';

import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyParams } from './AnyParams';
import type { AnyQuery } from './AnyQuery';

/** Schemas used for requests */
export interface RequestSchemas<HeadersT extends AnyHeaders, ParamsT extends AnyParams, QueryT extends AnyQuery, BodyT extends AnyBody> {
  headers?: Schema<HeadersT>;
  params?: Schema<ParamsT>;
  query?: Schema<QueryT>;
  body?: Schema<BodyT>;
}
