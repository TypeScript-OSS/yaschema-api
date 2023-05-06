import type { AnyBody } from '../types/AnyBody';
import type { AnyHeaders } from '../types/AnyHeaders';
import type { AnyParams } from '../types/AnyParams';
import type { AnyQuery } from '../types/AnyQuery';
import type { AnyStatus } from '../types/AnyStatus';
import type { HttpApi } from '../types/HttpApi';

/**
 * If name is omitted, it will be generated as:
 * ```
 * `HTTP ${api.routeType}:${api.method} ${api.url}`
 * ```
 */
export const makeHttpApi = <
  ReqHeadersT extends AnyHeaders = undefined,
  ReqParamsT extends AnyParams = undefined,
  ReqQueryT extends AnyQuery = undefined,
  ReqBodyT extends AnyBody = undefined,
  ResStatusT extends AnyStatus = AnyStatus,
  ResHeadersT extends AnyHeaders = undefined,
  ResBodyT extends AnyBody = undefined,
  ErrResStatusT extends AnyStatus = AnyStatus,
  ErrResHeadersT extends AnyHeaders = undefined,
  ErrResBodyT extends AnyBody = undefined
>(
  api: Omit<
    HttpApi<ReqHeadersT, ReqParamsT, ReqQueryT, ReqBodyT, ResStatusT, ResHeadersT, ResBodyT, ErrResStatusT, ErrResHeadersT, ErrResBodyT>,
    'isYaschemaApi' | 'isYaschemaHttpApi' | 'name'
  > & { name?: string }
): HttpApi<
  ReqHeadersT,
  ReqParamsT,
  ReqQueryT,
  ReqBodyT,
  ResStatusT,
  ResHeadersT,
  ResBodyT,
  ErrResStatusT,
  ErrResHeadersT,
  ErrResBodyT
> => ({ ...api, name: api.name ?? `HTTP ${api.routeType}:${api.method} ${api.url}`, isYaschemaApi: true, isYaschemaHttpApi: true });
