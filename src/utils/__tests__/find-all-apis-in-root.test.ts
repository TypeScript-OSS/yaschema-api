import { makeHttpApi } from '../../type-makers/make-http-api';
import { findAllApisInRoot } from '../find-all-apis-in-root';

const api1 = makeHttpApi({
  method: 'POST',
  routeType: 'test',
  url: '/test1/{one}',
  schemas: {
    request: {},
    successResponse: {}
  }
});
const api2 = makeHttpApi({
  method: 'POST',
  routeType: 'test',
  url: '/test2/{one}',
  schemas: {
    request: {},
    successResponse: {}
  }
});

describe('findAllApisInRoot', () => {
  it('shouldWork', () => {
    expect(findAllApisInRoot({ api1, api2 })).toMatchObject([api1, api2]);
    expect(findAllApisInRoot({ apis: { api1, api2 } })).toMatchObject([api1, api2]);
  });
});
