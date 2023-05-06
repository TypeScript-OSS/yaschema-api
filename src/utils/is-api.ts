import type { GenericApi } from '../types/GenericApi';

export const isApi = (value: any): value is GenericApi =>
  value !== undefined && typeof value === 'object' && 'isYaschemaApi' in value && (value as { isYaschemaApi: any }).isYaschemaApi === true;
