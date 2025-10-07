//why need to use interceptir - It manages the loading state globally for all HTTP requests.

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  // Without pipe() → we can’t attach finalize().
// Without finalize() → the loader might never hide if request errors out.

  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
};
