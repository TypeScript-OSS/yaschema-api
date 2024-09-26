import { schema } from 'yaschema';

import { anyStringSerializableTypeSchema } from './AnyStringSerializableType.js';

export const anyReqHeadersSchema = schema.record(schema.string(), anyStringSerializableTypeSchema).optional();
export const anyReqParamsSchema = schema.record(schema.string(), anyStringSerializableTypeSchema).optional();
export const anyReqQuerySchema = schema
  .record(schema.string(), schema.oneOf(anyStringSerializableTypeSchema, schema.array({ items: anyStringSerializableTypeSchema })))
  .optional();
export const anyReqBodySchema = schema.any().allowNull().optional();
