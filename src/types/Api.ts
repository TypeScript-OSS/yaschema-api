import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyParams } from './AnyParams';
import type { AnyQuery } from './AnyQuery';
import type { AnyStatus } from './AnyStatus';
import type { ApiSchemas } from './ApiSchemas';
import type { CachePolicy } from './CachePolicy';

/** A generic API description.  See `HttpApi` */
export interface Api<
  ReqHeadersT extends AnyHeaders,
  ReqParamsT extends AnyParams,
  ReqQueryT extends AnyQuery,
  ReqBodyT extends AnyBody,
  ResStatusT extends AnyStatus,
  ResHeadersT extends AnyHeaders,
  ResBodyT extends AnyBody,
  ErrResStatusT extends AnyStatus,
  ErrResHeadersT extends AnyHeaders,
  ErrResBodyT extends AnyBody
> {
  isYaschemaApi: true;

  schemas: ApiSchemas<
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
  >;

  /** The type of route, which will be used to select a URL base and is configurable using `setUrlBaseForRouteType` */
  routeType: string;

  /**
   * The statically known cache policy.  Use `"dynamic"` if the policy is determine dynamically.
   *
   * @defaultValue `{ canCache: false }`
   */
  cachePolicy?: CachePolicy | 'dynamic';
  /**
   * If `true`, it's safe to retry this API any time.
   *
   * @defaultValue `false`
   */
  isSafeToRetry?: boolean;
}
