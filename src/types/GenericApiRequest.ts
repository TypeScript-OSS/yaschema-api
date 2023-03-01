import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyParams } from './AnyParams';
import type { AnyQuery } from './AnyQuery';
import type { ApiRequest } from './ApiRequest';

export type GenericApiRequest = ApiRequest<AnyHeaders, AnyParams, AnyQuery, AnyBody>;
