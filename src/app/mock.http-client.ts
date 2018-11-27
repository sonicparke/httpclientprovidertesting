import { Observable, of } from 'rxjs';

export class MockHttpClient {
  public get(): Observable<any> {
    return of(true);
  }
}
