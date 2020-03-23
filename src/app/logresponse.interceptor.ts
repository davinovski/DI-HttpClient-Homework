import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse

} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LogresponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let status: string;

    return next.handle(request).pipe(
        tap(
          event => {
            status = '';
            if (event instanceof HttpResponse) {
              status = 'succeeded';
            }
          },
          error => status = 'failed'
        ),
        finalize(() => {
          const elapsedTime = new Date();
          const message = request.method + " " + request.urlWithParams +" "+ status + " at " + elapsedTime.toTimeString();
          console.log(message);
        })
    );
  }
}
