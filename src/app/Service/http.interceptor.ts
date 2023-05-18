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
 // const API_key='';
  constructor() {

  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // return next.handle();

    const tokenizedReq = request.clone({
     // headers: request.headers.set('appid=jhjkhkjhkj'),
    });
    return next.handle(tokenizedReq);

  }
}
