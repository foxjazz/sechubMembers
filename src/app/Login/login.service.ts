/**
 * Created by foxjazz on 9/30/16.
 */
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Headers, RequestOptions, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { config } from './config';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    private uri: string;
    private http: Http;
    private data: any;
    private handleError: any;
    constructor (private h: Http) {
        this.uri = config.node;
        this.http = h;
    }

    public login(loginData: NgForm): boolean
    {
        
        this.login2(loginData).subscribe(test => this.data = test);
        return true;
    }
    public login2 (loginData: NgForm): Observable<any>
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers } );
        let uriplus = this.uri + '/login';
        return this.http.post(uriplus, loginData, options)
            .map(this.data);

    }

  public register(loginData: NgForm): boolean
    {
        
        this.register2(loginData).subscribe(test => this.data = test);
        return true;
    }
    public register2 (loginData: NgForm): Observable<any>
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers } );
        let uriplus = this.uri + '/register';
        return this.http.post(uriplus, loginData, options)
            .map(this.data);

    }
  /*  public register (registerData: NgForm): boolean
    {
        let uriplus = this.uri + '/register';
        this.http.post(uriplus, registerData);
        return true;
    }*/
}
