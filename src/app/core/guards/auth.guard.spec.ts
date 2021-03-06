import { TestBed } from '@angular/core/testing';
import { AuthModule } from 'src/app/auth/auth.module';

import { AuthGuard } from './auth.guard';

describe('GuardsGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
