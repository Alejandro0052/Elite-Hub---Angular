import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule], 
      providers: [AuthGuard],
    });

    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if authenticated', () => {
    spyOn(localStorage, 'getItem').and.returnValue('dummy_token'); 
    expect(guard.canActivate()).toBeTrue();
  });

  it('should navigate to /login if not authenticated', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null); // No autenticado
    const routerSpy = spyOn(router, 'navigate');
    guard.canActivate();
    expect(routerSpy).toHaveBeenCalledWith(['/login']);
  });
});
