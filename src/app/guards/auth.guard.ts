import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../environments/environment';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem(environment.tokenName)
  const router = inject(Router)
  if (!token) {
    router.navigateByUrl('/home/login')
    return false;
  }
  return true;
};
