import type { Api } from '../types/Api';

export const makeApi = (api: Omit<Api, 'isYaschemaApi'>): Api => ({
  ...api,
  isYaschemaApi: true
});
