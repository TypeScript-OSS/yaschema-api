import type { SingleOrArray } from 'yaschema';

import type { AnyStringSerializableType } from '../types/AnyStringSerializableType';
import type { RequestSchemas } from '../types/RequestSchemas';

export const makeRequestSchemas = <
  HeadersT extends Record<string, AnyStringSerializableType>,
  ParamsT extends Record<string, AnyStringSerializableType>,
  QueryT extends Record<string, SingleOrArray<AnyStringSerializableType>>,
  BodyT
>(
  schemas: RequestSchemas<HeadersT, ParamsT, QueryT, BodyT>
) => schemas;
