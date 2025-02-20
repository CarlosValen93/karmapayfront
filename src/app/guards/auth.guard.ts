import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../environments/environment';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export interface CustomPayload extends JwtPayload {
  userId: number;

}

export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem(environment.tokenName)!;

  const router = inject(Router);

  const payload = jwtDecode<CustomPayload>(token);

  if (!token) {
    router.navigateByUrl('/home/login')
    return false;
  }
  return true;
};
