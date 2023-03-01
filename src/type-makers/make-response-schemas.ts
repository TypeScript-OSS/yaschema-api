import type { AnyBody } from '../types/AnyBody';
import type { AnyHeaders } from '../types/AnyHeaders';
import type { AnyStatus } from '../types/AnyStatus';
import type { ResponseSchemas } from '../types/ResponseSchemas';

export const makeResponseSchemas = <StatusT extends AnyStatus, HeadersT extends AnyHeaders, BodyT extends AnyBody>(
  schemas: ResponseSchemas<StatusT, HeadersT, BodyT>
) => schemas;
