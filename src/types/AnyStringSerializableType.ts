import { schema } from 'yaschema';

export const anyStringSerializableTypeSchema = schema.oneOf4(
  schema.number().setAllowedSerializationForms(['number', 'string']),
  schema.boolean().setAllowedSerializationForms(['boolean', 'string']),
  schema.string(),
  schema.object({ isStringSerializable: schema.boolean(true) })
);
export type AnyStringSerializableType = typeof anyStringSerializableTypeSchema.valueType;
