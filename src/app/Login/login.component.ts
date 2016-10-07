/**
 * Created by foxjazz on 9/30/16.
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
    selector: 'as-login',
    templateUrl: 'app/login/login.html',
    styleUrls: [
        'app/login/login.css'
    ],
    providers: [LoginService]
})

export class LoginComponent {
    user = {
        username: '',
        password: ''
    };
    private lgns;
    constructor (private lgnsvs: LoginService) {
        this.lgns = lgnsvs;
    }
    onSubmit(f: NgForm)
    {
        console.log(f.value);
        console.log(f.valid);
        this.lgns.login(f);
    }

}
