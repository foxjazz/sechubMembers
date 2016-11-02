"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by foxjazz on 9/30/16.
 */
var core_1 = require('@angular/core');
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    function LoginComponent(lgnsvs) {
        this.lgnsvs = lgnsvs;
        this.user = {
            username: '',
            password: ''
        };
        this.lgns = lgnsvs;
    }
    LoginComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        console.log(f.valid);
        this.lgns.login(f);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'as-login',
            templateUrl: 'app/login/login.html',
            styleUrls: [
                'app/login/login.css'
            ],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map