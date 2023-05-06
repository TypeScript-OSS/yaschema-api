import type { GenericHttpApi } from '../types/GenericHttpApi';

export const isHttpApi = (value: any): value is GenericHttpApi =>
  value !== undefined &&
  typeof value === 'object' &&
  'isYaschemaHttpApi' in value &&
  (value as { isYaschemaHttpApi: any }).isYaschemaHttpApi === true;
