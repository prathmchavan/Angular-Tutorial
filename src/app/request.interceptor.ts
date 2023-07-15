import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request interceptor ', request)
    const newRequest = request.clone({ headers: new HttpHeaders({ token: '2923dakfjd' }) })
    return next.handle(request);
  }
}
//we can set up interceptor like this to add the http header to every request to the api or specific request now i am not specifing the the request so the token will be added to every request made to the server