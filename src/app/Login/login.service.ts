/**
 * Created by foxjazz on 9/30/16.
 */
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { config } from './config';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    private uri: string;
    private http: Http;
    constructor (private h: Http) {
        this.uri = config.test;
        this.http = h;
    }

    public login (loginData: NgForm): boolean
    {
        // let result: Observable<Response>;
        let uriplus = this.uri + '/login';
        // result =  this.http.post(uriplus, loginData);

        return true;
    }

    public register (registerData: NgForm): boolean
    {
        // let result: Observable<Response>;
        let uriplus = this.uri + '/register';
        // result =  this.http.post(uriplus, registerData);
        return true;
    }
}
