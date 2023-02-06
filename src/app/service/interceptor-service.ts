import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
    providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
   
    constructor(private tokenservice: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let intReq = req;
        const token = this.tokenservice.getToken();
        if(token != null) {
            intReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer'+token) 
                //setHeaders: {Authorization: `Bearer ${token}`}
            });
        }
        console.log(intReq);
        console.log(token);
        return next.handle(intReq);
    }
}