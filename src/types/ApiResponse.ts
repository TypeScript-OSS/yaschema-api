import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyStatus } from './AnyStatus';
import type { OptionalIfPossiblyUndefined } from './OptionalIfPossiblyUndefined';

export type ApiResponse<StatusT extends AnyStatus, HeadersT extends AnyHeaders, BodyT extends AnyBody> = {
  status: StatusT;
} & OptionalIfPossiblyUndefined<'headers', HeadersT> &
  OptionalIfPossiblyUndefined<'body', BodyT>;
