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
 // API_key = '225012b5e782cc243a2be3224cec5ba4';
  API_key ='9a2518995db6d9b91452d04298e2814d';
  constructor() {

  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const tokenizedReq = request.clone({
      headers: request.headers
        .set('appid', this.API_key)
        .set('Access-Control-Allow-Origin', '*')
        .set('Content-Type','application/json'),
    });
    return next.handle(tokenizedReq);
  }
}
