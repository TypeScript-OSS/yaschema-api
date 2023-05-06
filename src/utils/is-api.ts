import type { Api } from '../types/Api';

export const isApi = (value: any): value is Api =>
  value !== undefined && typeof value === 'object' && 'isYaschemaApi' in value && (value as { isYaschemaApi: any }).isYaschemaApi === true;
