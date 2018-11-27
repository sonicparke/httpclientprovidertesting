import { TestBed } from '@angular/core/testing';

import { MyStandardService } from './my-standard.service';
import { HttpClient } from 'selenium-webdriver/http';
import { MockHttpClient } from './mock.http-client';

describe('MyStandardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: HttpClient,
        useClass: MockHttpClient
      }
    ]
  }));

  it('should be created', () => {
    const service: MyStandardService = TestBed.get(MyStandardService);
    expect(service).toBeTruthy();
  });
});
