import { MyIsolatedService } from './my-isolated.service';
import { MockHttpClient } from './mock.http-client';

// This is how we'd like to write our tests.
// It's cleaner and more simple.
// However we get 'No provider for HttpClient and other services but not all services.
// Is there a way to get around that error and still write our tests like so
// without having to fall back to using TestBed?

describe('MyIsolatedService', () => {
  let service;
  let http;

  beforeEach(() => {
    http = new MockHttpClient();
    service = new MyIsolatedService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
