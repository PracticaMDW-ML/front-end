import { ErrorHttp } from './http-errors.model';
import { Error } from './error.model';
import { Http, Response, Headers, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { HttpResponse } from '@angular/common/http/src/response';
import { Injectable } from '@angular/core';
import { MatSnackBar, _MatOptgroupMixinBase } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { User } from '../home/shared/user.model';

@Injectable()
export class HttpService {

    static API_END_POINT = 'http://localhost:3000';

    static CREATE_USER = '/usuarios';

    static LOGIN = '/auth';

    private params: URLSearchParams;

    private headers: Headers;

    private responseType: ResponseContentType;

    private token: string;
    private usuario: string;

    constructor(private http: Http, private snackBar: MatSnackBar, private router: Router) {
        this.resetOptions();
    }

    private resetOptions(): void {
        this.headers = new Headers();
        this.params = new URLSearchParams();
        this.responseType = ResponseContentType.Text;
    }

    param(key: string, value: string): HttpService {
        this.params.append(key, value);
        return this;
    }

    header(key: string, value: string): HttpService {
        this.headers.append(key, value);
        return this;
    }

    login(username: string, password: string): Observable<any> {
        const user: User = { usuario: username, password: password };
        this.usuario = username;
        return this.post(HttpService.LOGIN, user).map(
            res => this.token = res.token,
            error => this.token = null,
        );
    }

    getUsuario(): string {
        return this.usuario;
    }

    isAuthenticated(): boolean {
        return this.token ? true : false;
    }

    getUsuario(): string{
        return this.usuario;
    }

    get(endpoint: string): Observable<any> {
        return this.http.get(HttpService.API_END_POINT + endpoint, this.createOptions()).map(
            response => this.extractData(response)).catch(
            error => {
                return this.handleError(error);
            });
    }

    registerUser(username: string, password: string): Observable<boolean> {
        const user: User = { usuario: username, password: password };
        return this.post(HttpService.CREATE_USER, user).map(
            res => true,
            error => false,
        );
    }

    post(endpoint: string, body?: Object): Observable<any> {
        this.header('Authorization', this.token);
        return this.http.post(HttpService.API_END_POINT + endpoint, body, this.createOptions()).map(
            response => this.extractData(response)).catch(
            error => {
                return this.handleError(error);
            });
    }

    delete(endpoint: string): Observable<any> {
        this.header('Authorization', this.token);
        return this.http.delete(HttpService.API_END_POINT + endpoint, this.createOptions()).map(
            response => this.extractData(response)).catch(
            error => {
                return this.handleError(error);
            });
    }

    put(endpoint: string, body?: Object): Observable<any> {
        this.header('Authorization', this.token);
        return this.http.put(HttpService.API_END_POINT + endpoint, body, this.createOptions()).map(
            response => this.extractData(response)).catch(
            error => {
                return this.handleError(error);
            });
    }

    patch(endpoint: string, body?: Object): Observable<any> {
        this.header('Authorization', this.token);
        return this.http.patch(HttpService.API_END_POINT + endpoint, body, this.createOptions()).map(
            response => this.extractData(response)).catch(
            error => {
                return this.handleError(error);
            });
    }

    private createOptions(): RequestOptions {
        const options: RequestOptions = new RequestOptions({
            headers: this.headers,
            params: this.params,
            responseType: this.responseType
        });
        this.resetOptions();
        return options;
    }

    private extractData(response: Response): any {
        const contentType = response.headers.get('content-type');
        if (contentType) {
            if (contentType.indexOf('application/pdf') !== -1) {
                return new Blob([response.blob()], { type: 'application/pdf' });
            } else if (contentType.indexOf('application/json') !== -1) {
                return response.json();
            }
        } else if (response.text()) {
            return response.text();
        } else {
            return response;
        }
    }

    private handleError(response: Response): any {
        let error: Error;
        if (response.status === ErrorHttp.UNAUTHORIZED) {
            // this.logout();
        }
        try {
            error = {
                httpError: response.status, exception: response.json().exception,
                message: response.json().message, path: response.json().path
            };
            this.snackBar.open(error.message, 'Error', {
                duration: 8000
            });
            return Observable.throw(error);
        } catch (e) {
            this.snackBar.open(response.toString(), 'Error', {
                duration: 8000
            });
            return Observable.throw(response);
        }
    }
}
