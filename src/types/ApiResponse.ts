import type { AnyStringSerializableType } from './AnyStringSerializableType';
import type { OptionalIfUnknown } from './OptionalIfUnknown';

export type ApiResponse<StatusT extends number, HeadersT extends Record<string, AnyStringSerializableType>, BodyT> = {
  status: StatusT;
} & OptionalIfUnknown<'headers', HeadersT> &
  OptionalIfUnknown<'body', BodyT>;
