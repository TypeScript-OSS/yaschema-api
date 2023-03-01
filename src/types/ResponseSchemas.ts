import type { Schema } from 'yaschema';

import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyStatus } from './AnyStatus';

/** Schemas used for responses */
export interface ResponseSchemas<StatusT extends AnyStatus, HeadersT extends AnyHeaders, BodyT extends AnyBody> {
  status?: Schema<StatusT>;
  headers?: Schema<HeadersT>;
  body?: Schema<BodyT>;
}
