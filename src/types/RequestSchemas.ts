import type { Schema, SingleOrArray } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';

export interface RequestSchemas<
  HeadersT extends Record<string, AnyStringSerializableType>,
  ParamsT extends Record<string, AnyStringSerializableType>,
  QueryT extends Record<string, SingleOrArray<AnyStringSerializableType>>,
  BodyT
> {
  headers?: Schema<HeadersT>;
  params?: Schema<ParamsT>;
  query?: Schema<QueryT>;
  body?: Schema<BodyT>;
}
