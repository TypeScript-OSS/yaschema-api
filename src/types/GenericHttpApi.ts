import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyParams } from './AnyParams';
import type { AnyQuery } from './AnyQuery';
import type { AnyStatus } from './AnyStatus';
import type { HttpApi } from './HttpApi';

export type GenericHttpApi = HttpApi<
  AnyHeaders,
  AnyParams,
  AnyQuery,
  AnyBody,
  AnyStatus,
  AnyHeaders,
  AnyBody,
  AnyStatus,
  AnyHeaders,
  AnyBody
>;
