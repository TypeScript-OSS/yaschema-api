import { schema } from 'yaschema';

import { makeHttpApi } from '../type-makers/make-http-api';
import { checkResponseValidation } from '../utils/check-response-validation';

const anyStringSerializableTypeSchema = schema.oneOf3(
  schema.number().setAllowedSerializationForms(['number', 'string']),
  schema.boolean().setAllowedSerializationForms(['boolean', 'string']),
  schema.string()
);

const anyResStatusSchema = schema.number();
const anyResHeadersSchema = schema.record(schema.string(), anyStringSerializableTypeSchema).optional();
const anyResBodySchema = schema.any().allowNull().optional();

const api = makeHttpApi({
  method: 'POST',
  routeType: 'test',
  url: '/test/{one}',
  schemas: {
    request: {
      headers: schema.object({ authorization: schema.string() }),
      params: schema.object({ one: schema.number().setAllowedSerializationForms(['number', 'string']) }),
      query: schema.object({ q: schema.string().optional() }),
      body: schema.object({ echo: schema.string() })
    },
    successResponse: {
      body: schema.object({ echo: schema.string() })
    }
  }
});

describe('checkResponseValidation', () => {
  it('should work for the happy case', async () => {
    const res = {
      status: 200 satisfies Required<typeof api.schemas.successResponse>['status']['valueType'],
      headers: {},
      body: { echo: 'world' } satisfies Required<typeof api.schemas.successResponse>['body']['valueType']
    };

    const schemas = api.schemas.successResponse;
    const [resStatus, resHeaders, resBody] = await Promise.all([
      (schemas.status ?? anyResStatusSchema).serializeAsync(res.status, { validation: 'hard' }),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      (schemas.headers ?? anyResHeadersSchema).serializeAsync(res.headers as any, { validation: 'hard' }),
      (schemas.body ?? anyResBodySchema).serializeAsync(res.body, { validation: 'hard' })
    ]);

    const checkedResponseValidation = checkResponseValidation({
      resStatus,
      resHeaders,
      resBody,
      validationMode: 'hard'
    });
    expect(checkedResponseValidation.ok).toBeTruthy();
    expect(checkedResponseValidation.validationError).toBeUndefined();
    expect(checkedResponseValidation.invalidPart).toBeUndefined();
  });

  it('should catch validation errors', async () => {
    const res = {
      status: 200 satisfies Required<typeof api.schemas.successResponse>['status']['valueType'],
      headers: {},
      body: {} // Should be a validation error since "echo" is missing
    };

    const schemas = api.schemas.successResponse;
    const [resStatus, resHeaders, resBody] = await Promise.all([
      (schemas.status ?? anyResStatusSchema).serializeAsync(res.status, { validation: 'hard' }),
      (schemas.headers ?? anyResHeadersSchema).serializeAsync(undefined, { validation: 'hard' }),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      (schemas.body ?? anyResBodySchema).serializeAsync(res.body as any, { validation: 'hard' })
    ]);

    const checkedResponseValidation = checkResponseValidation({
      resStatus,
      resHeaders,
      resBody,
      validationMode: 'hard'
    });
    expect(checkedResponseValidation.ok).toBeFalsy();
    expect(checkedResponseValidation.validationError).toBeDefined();
    expect(checkedResponseValidation.invalidPart).toBe('body');
  });
});
