import type { SingleOrArray } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';
import type { HttpApi } from './HttpApi';

export type GenericHttpApi = HttpApi<
  Record<string, AnyStringSerializableType>,
  Record<string, AnyStringSerializableType>,
  Record<string, SingleOrArray<AnyStringSerializableType>>,
  any,
  number,
  Record<string, AnyStringSerializableType>,
  any,
  number,
  Record<string, AnyStringSerializableType>,
  any
>;
