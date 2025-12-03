import { LOCALE_ID, Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,

} from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';
//import { StyleModeService } from '../header/style-mode.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(@Inject(LOCALE_ID) public localeId: string//, public styleModeService: StyleModeService
) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const customReq = request.clone({});
    //return next.handle(request).pipe(
      return next.handle(customReq).pipe(
      catchError((error: HttpErrorResponse) => {

            if (error instanceof HttpErrorResponse) {
              if (error.status === 401) {
                // On an unauthorized response, clear all local authentication
                // data and redirect to the main site home page.  This avoids
                // redirecting to hard‑coded ports or protocols.
                const keys = [
                  'userToken',
                  'UserInfo',
                  'userInfo',
                  'token',
                  'roles',
                  'apiKey',
                  'darkMode',
                  'accessToken'
                ];
                keys.forEach((k) => {
                  try {
                    localStorage.removeItem(k);
                  } catch {
                    /* ignore */
                  }
                });
                // Expire cookies across the neetechs.com domain
                document.cookie =
                  'userToken=; domain=.neetechs.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
                document.cookie =
                  'UserInfo=; domain=.neetechs.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
                // Redirect to the main site home page
                const hostParts = window.location.hostname.split('.');
                const baseDomain = hostParts.slice(-2).join('.');
                window.location.href = `https://${baseDomain}/`;
              }
              // return the error to the caller
              return throwError(error);
            } else {
              return throwError(error);
            }
      })
    );
  }
}
