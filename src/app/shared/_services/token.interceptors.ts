import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError, filter, take, switchMap } from "rxjs/operators";
import {AuthService} from "./auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
        null
    );

    constructor(public authService: AuthService) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        if (request.url.startsWith("/bestinform")) {
            if (!request.url.startsWith("/bestinform/login") &&
                !request.url.startsWith("/bestinform/registerUser") &&
                !request.url.startsWith("/bestinform/sendRegistrationEmail") &&
                !request.url.startsWith("/bestinform/sendResetUserPassword?email=") &&
                !request.url.startsWith("/bestinform/resetNewPassword") &&
                !request.url.startsWith("/bestinform/getHomepageByLanguageAndApp")&&
                !request.url.startsWith("/bestinform/listEditorialFiltered") &&
                !request.url.startsWith("/bestinform/listResourceTemplateFiltered") &&
                !request.url.startsWith("/bestinform/getAttributeById") &&
                !request.url.startsWith("/bestinform/getAttributeMaxOrderByCategoryId") &&
                !request.url.startsWith("/bestinform/listAttributesFiltered")
                // !request.url.startsWith("/bestinform/sendProviderApprovedEmail?userId")

            ) {
                if (this.authService.getJWTToken()) {
                    request = this.addToken(request, this.authService.getJWTToken());
                }

                return next.handle(request).pipe(
                    catchError((error) => {
                        if (error instanceof HttpErrorResponse && error.status === 401) {
                            return this.handle401Error(request, next);
                        } else {
                            return throwError(error);
                        }
                    })
                );
            } else {
                console.log('ELSE URL', request.url)
                request = request.clone({
                    // url:  'https://bestinform.eu' + req.url
                    url:   request.url
                });
            }
        }
    }

    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshToken().pipe(
                switchMap((token: any) => {
                    console.log('REFRESH TOKEN', token);
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(token.token);
                    return next.handle(this.addToken(request, token.token));
                })
            );
        } else {
            return this.refreshTokenSubject.pipe(
                filter((token) => token != null),
                take(1),
                switchMap((jwt) => {
                    return next.handle(this.addToken(request, jwt));
                })
            );
        }
    }
}


export const tokenInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
};
