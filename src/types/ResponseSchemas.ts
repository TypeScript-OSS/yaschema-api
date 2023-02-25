import type { Schema } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';

/** Schemas used for responses */
export interface ResponseSchemas<StatusT extends number, HeadersT extends Record<string, AnyStringSerializableType>, BodyT> {
  status?: Schema<StatusT>;
  headers?: Schema<HeadersT>;
  body?: Schema<BodyT>;
}
