import { schema } from 'yaschema';

import { anyStringSerializableTypeSchema } from './AnyStringSerializableType.js';

export const anyResStatusSchema = schema.number();
export const anyResHeadersSchema = schema.record(schema.string(), anyStringSerializableTypeSchema).optional();
export const anyResBodySchema = schema.any().allowNull().optional();
