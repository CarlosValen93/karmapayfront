import { HttpInterceptorFn } from '@angular/common/http';

export const ngrokInterceptor: HttpInterceptorFn = (req, next) => {

  let reqclone = req.clone({
    setHeaders: {
      "ngrok-skip-browser-warning": "true"
    }
  })

  return next(reqclone);
};
