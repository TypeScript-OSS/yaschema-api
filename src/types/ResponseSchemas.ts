import type { Schema } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';

export interface ResponseSchemas<StatusT extends number, HeadersT extends Record<string, AnyStringSerializableType>, BodyT> {
  status?: Schema<StatusT>;
  headers?: Schema<HeadersT>;
  body?: Schema<BodyT>;
}
