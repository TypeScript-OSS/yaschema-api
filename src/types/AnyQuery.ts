import type { SingleOrArray } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';

export type AnyQuery = Record<string, SingleOrArray<AnyStringSerializableType>> | undefined;
