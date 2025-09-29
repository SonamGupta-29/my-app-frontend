// src/app/interceptors/auth.interceptor.ts
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';

// Function-based interceptor (Angular 19 standalone style)
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('AuthInterceptor triggered for:', req.url);

  const token = localStorage.getItem('token');

  if (token) {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    console.log('Added Authorization header:', cloned.headers.get('Authorization'));
    return next(cloned);
  } else {
    console.warn('No token found, request sent without Authorization header');
  }

  return next(req);
};


