import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    const token = sessionStorage.getItem('token');

    let request = req;

    // si ya hay un token hace la request para con header autorizados por el token
    if(token){
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      })
    }

    // la request que obtiene el interceptor se la para al handle
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          console.log('ERROR 401 NO TIENES PERMISOS CHE VOFI')
          this.router.navigateByUrl('/login');
        }
        else if (err.status === 403) {
          this.router.navigateByUrl('/login');
        }

        return throwError( err );
      })
    );
  }
}
