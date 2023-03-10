import { schema } from 'yaschema';
import { makeHttpApi } from '../type-makers/make-http-api';
import { checkRequestValidation } from '../utils/check-request-validation';

const anyStringSerializableTypeSchema = schema.oneOf3(
  schema.number().setAllowedSerializationForms(['number', 'string']),
  schema.boolean().setAllowedSerializationForms(['boolean', 'string']),
  schema.string()
);

const anyReqHeadersSchema = schema.record(schema.string(), anyStringSerializableTypeSchema).optional();
const anyReqParamsSchema = schema.record(schema.string(), anyStringSerializableTypeSchema).optional();
const anyReqQuerySchema = schema
  .record(schema.string(), schema.oneOf(anyStringSerializableTypeSchema, schema.array({ items: anyStringSerializableTypeSchema })))
  .optional();
const anyReqBodySchema = schema.any().allowNull().optional();

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

describe('checkRequestValidation', () => {
  it('should work for the happy case', async () => {
    const req = {
      headers: { authorization: 'hi' } satisfies Required<typeof api.schemas.request>['headers']['valueType'],
      params: { one: 3.14 } satisfies Required<typeof api.schemas.request>['params']['valueType'],
      query: { q: 'hello' } satisfies Required<typeof api.schemas.request>['query']['valueType'],
      body: { echo: 'world' } satisfies Required<typeof api.schemas.request>['body']['valueType']
    };

    const [reqHeaders, reqParams, reqQuery, reqBody] = await Promise.all([
      (api.schemas.request.headers ?? anyReqHeadersSchema).deserializeAsync(req.headers, { validation: 'hard' }),
      (api.schemas.request.params ?? anyReqParamsSchema).deserializeAsync(req.params, { validation: 'hard' }),
      (api.schemas.request.query ?? anyReqQuerySchema).deserializeAsync(req.query, { validation: 'hard' }),
      (api.schemas.request.body ?? anyReqBodySchema).deserializeAsync(req.body, { validation: 'hard' })
    ]);

    const checkedRequestValidation = checkRequestValidation({
      reqHeaders,
      reqParams,
      reqQuery,
      reqBody,
      validationMode: 'hard'
    });
    expect(checkedRequestValidation.ok).toBeTruthy();
    expect(checkedRequestValidation.validationError).toBeUndefined();
    expect(checkedRequestValidation.invalidPart).toBeUndefined();
  });

  it('should catch validation errors', async () => {
    const req = {
      headers: { authorization: 'hi' } satisfies Required<typeof api.schemas.request>['headers']['valueType'],
      params: { one: 'three-point-one-four' }, // This should be invalid since it expects a number or a stringified number
      query: { q: 'hello' } satisfies Required<typeof api.schemas.request>['query']['valueType'],
      body: { echo: 'world' } satisfies Required<typeof api.schemas.request>['body']['valueType']
    };

    const [reqHeaders, reqParams, reqQuery, reqBody] = await Promise.all([
      (api.schemas.request.headers ?? anyReqHeadersSchema).deserializeAsync(req.headers, { validation: 'hard' }),
      (api.schemas.request.params ?? anyReqParamsSchema).deserializeAsync(req.params, { validation: 'hard' }),
      (api.schemas.request.query ?? anyReqQuerySchema).deserializeAsync(req.query, { validation: 'hard' }),
      (api.schemas.request.body ?? anyReqBodySchema).deserializeAsync(req.body, { validation: 'hard' })
    ]);

    const checkedRequestValidation = checkRequestValidation({
      reqHeaders,
      reqParams,
      reqQuery,
      reqBody,
      validationMode: 'hard'
    });
    expect(checkedRequestValidation.ok).toBeFalsy();
    expect(checkedRequestValidation.validationError).toBeDefined();
    expect(checkedRequestValidation.invalidPart).toBe('params');
  });
});
