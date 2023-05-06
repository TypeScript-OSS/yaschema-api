import type { Api } from '../types/Api';
import { isApi } from './is-api';

export const findAllApisInRoot = (root: any): Api[] => internalFindAllApisInRoot(root, 0, []);

// Helpers

const MAX_DEPTH = 10;

const internalFindAllApisInRoot = (root: any, depth: number, output: Api[]): Api[] => {
  if (depth >= MAX_DEPTH || root === null || root === undefined || Array.isArray(root) || typeof root !== 'object') {
    return output;
  }

  if (isApi(root)) {
    output.push(root);
    return output;
  }

  for (const value of Object.values(root as object)) {
    internalFindAllApisInRoot(value, depth + 1, output);
  }
  return output;
};
