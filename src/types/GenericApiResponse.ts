import type { AnyStringSerializableType } from './AnyStringSerializableType';
import type { ApiResponse } from './ApiResponse';

export type GenericApiResponse = ApiResponse<number, Record<string, AnyStringSerializableType>, any>;
