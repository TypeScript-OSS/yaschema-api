import type { AnyBody } from '../types/AnyBody';
import type { AnyHeaders } from '../types/AnyHeaders';
import type { AnyParams } from '../types/AnyParams';
import type { AnyQuery } from '../types/AnyQuery';
import type { AnyStatus } from '../types/AnyStatus';
import type { Api } from '../types/Api';

export const makeApi = <
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
>(
  api: Omit<
    Api<ReqHeadersT, ReqParamsT, ReqQueryT, ReqBodyT, ResStatusT, ResHeadersT, ResBodyT, ErrResStatusT, ErrResHeadersT, ErrResBodyT>,
    'isYaschemaApi'
  >
): Api<ReqHeadersT, ReqParamsT, ReqQueryT, ReqBodyT, ResStatusT, ResHeadersT, ResBodyT, ErrResStatusT, ErrResHeadersT, ErrResBodyT> => ({
  ...api,
  isYaschemaApi: true
});
