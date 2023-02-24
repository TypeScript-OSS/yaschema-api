export interface CachePolicy {
  /**
   * `false` - never cache
   * `true` - can be cached, but not publicly
   * `"public"` - CDNs, ISPs, proxies, etc. are allowed to cache the response, which is insecure
   */
  canCache: boolean | 'public';
  /** The duration to allow caching for, in seconds from the time of the response.  This is ignored if `canCache` is false. */
  cacheIntervalSec: number;
  /**
   * If true, the client must revalidate the cache against the server.
   *
   * @defaultValue `false`
   */
  mustRevalidate?: boolean;
}
