/**
 * Created by foxjazz on 9/30/16.
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
    selector: 'as-signin',
    templateUrl: 'app/signin/signin.html',
    styleUrls: [
        'app/signin/signin.css'
    ],
    providers: [LoginService]
})

export class SignInComponent {
    user = {
        username: '',
        password: '',
        email: ''
    };
    private regs;
    constructor (private d: LoginService) {
        this.regs = d;
    }
    onSubmit(f: NgForm)
    {
        console.log(f.value);
        this.regs.register(f.value);
    }

}
/**
 * Created by fox21 on 11/1/2016.
 */
