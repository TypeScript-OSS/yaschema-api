import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyStatus } from './AnyStatus';
import type { ApiResponse } from './ApiResponse';

export type GenericApiResponse = ApiResponse<AnyStatus, AnyHeaders, AnyBody>;
