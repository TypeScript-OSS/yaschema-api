import type { AnyStringSerializableType } from '../types/AnyStringSerializableType';
import type { ResponseSchemas } from '../types/ResponseSchemas';

export const makeResponseSchemas = <StatusT extends number, HeadersT extends Record<string, AnyStringSerializableType>, BodyT>(
  schemas: ResponseSchemas<StatusT, HeadersT, BodyT>
) => schemas;
