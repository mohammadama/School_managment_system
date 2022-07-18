import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const studentlist = localStorage.getItem('studentlist');

    if (studentlist) {
      const cloned = req.clone({
        headers: req.headers.set('Autherization',
        'Bearer '  + studentlist)
      });

        return next.handle(cloned);
    }
    else{
      return next.handle(req);
    }

  }
}
