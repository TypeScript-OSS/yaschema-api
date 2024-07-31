import type { DeserializationResult, SerializationResult, ValidationMode } from 'yaschema';

import type { AnyBody } from '../types/AnyBody';
import type { AnyHeaders } from '../types/AnyHeaders';
import type { AnyParams } from '../types/AnyParams';
import type { AnyQuery } from '../types/AnyQuery';
import type { GenericApiRequest } from '../types/GenericApiRequest';

/** Determines request schema validation results and conceptually returns one of three states: valid, invalid (soft validation error), or
 * invalid (hard validation error).  For invalid cases, additional metadata is included in the result. */
export const checkRequestValidation = ({
  reqHeaders,
  reqParams,
  reqQuery,
  reqBody,
  validationMode
}: {
  reqHeaders: SerializationResult | DeserializationResult<Partial<AnyHeaders>>;
  reqParams: SerializationResult | DeserializationResult<Partial<AnyParams>>;
  reqQuery: SerializationResult | DeserializationResult<Partial<AnyQuery>>;
  reqBody: SerializationResult | DeserializationResult<AnyBody>;
  validationMode: ValidationMode;
}):
  | ({ ok: true } & (
      | { hadSoftValidationError: false; invalidPart?: undefined; validationError?: undefined; validationErrorPath?: undefined }
      | { hadSoftValidationError: true; invalidPart: keyof GenericApiRequest; validationError: string; validationErrorPath: string }
    ))
  | { ok: false; invalidPart: keyof GenericApiRequest; validationError: string; validationErrorPath: string } => {
  if (reqHeaders.error !== undefined) {
    if (validationMode === 'hard') {
      return { ok: false, invalidPart: 'headers', validationError: reqHeaders.error, validationErrorPath: reqHeaders.errorPath };
    } else {
      return {
        ok: true,
        hadSoftValidationError: true,
        invalidPart: 'headers',
        validationError: reqHeaders.error,
        validationErrorPath: reqHeaders.errorPath
      };
    }
  }

  if (reqParams.error !== undefined) {
    if (validationMode === 'hard') {
      return { ok: false, invalidPart: 'params', validationError: reqParams.error, validationErrorPath: reqParams.errorPath };
    } else {
      return {
        ok: true,
        hadSoftValidationError: true,
        invalidPart: 'params',
        validationError: reqParams.error,
        validationErrorPath: reqParams.errorPath
      };
    }
  }

  if (reqQuery.error !== undefined) {
    if (validationMode === 'hard') {
      return { ok: false, invalidPart: 'query', validationError: reqQuery.error, validationErrorPath: reqQuery.errorPath };
    } else {
      return {
        ok: true,
        hadSoftValidationError: true,
        invalidPart: 'query',
        validationError: reqQuery.error,
        validationErrorPath: reqQuery.errorPath
      };
    }
  }

  if (reqBody.error !== undefined) {
    if (validationMode === 'hard') {
      return { ok: false, invalidPart: 'body', validationError: reqBody.error, validationErrorPath: reqBody.errorPath };
    } else {
      return {
        ok: true,
        hadSoftValidationError: true,
        invalidPart: 'body',
        validationError: reqBody.error,
        validationErrorPath: reqBody.errorPath
      };
    }
  }

  return { ok: true, hadSoftValidationError: false };
};
