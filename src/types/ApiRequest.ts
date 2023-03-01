import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyParams } from './AnyParams';
import type { AnyQuery } from './AnyQuery';
import type { OptionalIfPossiblyUndefined } from './OptionalIfPossiblyUndefined';

export type ApiRequest<
  HeadersT extends AnyHeaders,
  ParamsT extends AnyParams,
  QueryT extends AnyQuery,
  BodyT extends AnyBody
> = OptionalIfPossiblyUndefined<'headers', HeadersT> &
  OptionalIfPossiblyUndefined<'params', ParamsT> &
  OptionalIfPossiblyUndefined<'query', QueryT> &
  OptionalIfPossiblyUndefined<'body', BodyT>;
