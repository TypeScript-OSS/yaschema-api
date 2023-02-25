import type { SingleOrArray } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';
import type { Api } from './Api';

export type GenericApi = Api<
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
