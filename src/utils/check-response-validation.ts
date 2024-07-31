import type { DeserializationResult, SerializationResult, ValidationMode } from 'yaschema';

import type { AnyBody } from '../types/AnyBody';
import type { AnyHeaders } from '../types/AnyHeaders';
import type { AnyStatus } from '../types/AnyStatus';
import type { GenericApiResponse } from '../types/GenericApiResponse';

/** Determines response schema validation results and conceptually returns one of three states: valid, invalid (soft validation error), or
 * invalid (hard validation error).  For invalid cases, additional metadata is included in the result. */
export const checkResponseValidation = ({
  resStatus,
  resHeaders,
  resBody,
  validationMode
}: {
  resStatus: SerializationResult | DeserializationResult<Partial<AnyStatus>>;
  resHeaders: SerializationResult | DeserializationResult<Partial<AnyHeaders>>;
  resBody: SerializationResult | DeserializationResult<Partial<AnyBody>>;
  validationMode: ValidationMode;
}):
  | ({ ok: true } & (
      | { hadSoftValidationError: false; invalidPart?: undefined; validationError?: undefined; validationErrorPath?: undefined }
      | { hadSoftValidationError: true; invalidPart: keyof GenericApiResponse; validationError: string; validationErrorPath: string }
    ))
  | { ok: false; invalidPart: keyof GenericApiResponse; validationError: string; validationErrorPath: string } => {
  if (resStatus.error !== undefined) {
    if (validationMode === 'hard') {
      return { ok: false, invalidPart: 'status', validationError: resStatus.error, validationErrorPath: resStatus.errorPath };
    } else {
      return {
        ok: true,
        hadSoftValidationError: true,
        invalidPart: 'status',
        validationError: resStatus.error,
        validationErrorPath: resStatus.errorPath
      };
    }
  }

  if (resHeaders.error !== undefined) {
    if (validationMode === 'hard') {
      return { ok: false, invalidPart: 'headers', validationError: resHeaders.error, validationErrorPath: resHeaders.errorPath };
    } else {
      return {
        ok: true,
        hadSoftValidationError: true,
        invalidPart: 'headers',
        validationError: resHeaders.error,
        validationErrorPath: resHeaders.errorPath
      };
    }
  }

  if (resBody.error !== undefined) {
    if (validationMode === 'hard') {
      return { ok: false, invalidPart: 'body', validationError: resBody.error, validationErrorPath: resBody.errorPath };
    } else {
      return {
        ok: true,
        hadSoftValidationError: true,
        invalidPart: 'body',
        validationError: resBody.error,
        validationErrorPath: resBody.errorPath
      };
    }
  }

  return { ok: true, hadSoftValidationError: false };
};
