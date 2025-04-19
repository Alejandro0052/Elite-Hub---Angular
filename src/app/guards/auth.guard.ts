import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('access_token');
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirige si no está autenticado
      return false;

    }
    return isAuthenticated;
    
  }
}
