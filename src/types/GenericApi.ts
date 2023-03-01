import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyParams } from './AnyParams';
import type { AnyQuery } from './AnyQuery';
import type { AnyStatus } from './AnyStatus';
import type { Api } from './Api';

export type GenericApi = Api<AnyHeaders, AnyParams, AnyQuery, AnyBody, AnyStatus, AnyHeaders, AnyBody, AnyStatus, AnyHeaders, AnyBody>;
