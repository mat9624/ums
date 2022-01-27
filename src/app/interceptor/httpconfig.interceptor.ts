import { Injectable } from '@angular/core';
import{
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        debugger
        if(localStorage.getItem('token')==null){
            return next.handle(request);
        }
        const token: string = localStorage.getItem('token');
        
        const req=request.clone({headers: request.headers.set('Authorization',token)})

        return next.handle(req);
    }

}
