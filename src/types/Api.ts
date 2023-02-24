import type { SingleOrArray } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';
import type { ApiSchemas } from './ApiSchemas';
import type { CachePolicy } from './CachePolicy';

export interface Api<
  ReqHeadersT extends Record<string, AnyStringSerializableType>,
  ReqParamsT extends Record<string, AnyStringSerializableType>,
  ReqQueryT extends Record<string, SingleOrArray<AnyStringSerializableType>>,
  ReqBodyT,
  ResStatusT extends number,
  ResHeadersT extends Record<string, AnyStringSerializableType>,
  ResBodyT,
  ErrResStatusT extends number,
  ErrResHeadersT extends Record<string, AnyStringSerializableType>,
  ErrResBodyT
> {
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
