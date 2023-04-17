import { TestBed } from '@angular/core/testing';

import { AuthInceptorInterceptor } from './auth-inceptor.interceptor';

describe('AuthInceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInceptorInterceptor = TestBed.inject(AuthInceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
