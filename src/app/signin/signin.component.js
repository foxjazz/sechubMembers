"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by foxjazz on 9/30/16.
 */
var core_1 = require('@angular/core');
var login_service_1 = require('../login/login.service');
var SignInComponent = (function () {
    function SignInComponent(d) {
        this.d = d;
        this.user = {
            username: '',
            password: '',
            email: ''
        };
        this.regs = d;
    }
    SignInComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        this.regs.register(f.value);
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'as-signin',
            templateUrl: 'app/signin/signin.html',
            styleUrls: [
                'app/signin/signin.css'
            ],
            providers: [login_service_1.LoginService]
        })
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
/**
 * Created by fox21 on 11/1/2016.
 */
