import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  API_key='225012b5e782cc243a2be3224cec5ba4';
  constructor() {
    
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const tokenizedReq = request.clone({
      headers: request.headers.set('appid',this.API_key),
    });
    return next.handle(tokenizedReq);
  }
}
