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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var index_1 = require('./index');
var payment_component_1 = require('./payment.component');
var ExtendedMembers_component_1 = require("./ExtendedMembers.component");
var filter_pipe_1 = require("./filter.pipe");
var http_1 = require("@angular/http");
var maintenance_component_1 = require("./maintenance.component");
var ems_component_1 = require("./ems.component");
//import { AngularFireModule } from 'angularfire2';
exports.firebaseConfig = {
    apiKey: 'AIzaSyD3UeQygrWX3JWL3o9DWe8c-7r-rF1KD30',
    authDomain: 'memberships-a6f7c.firebaseapp.com',
    databaseURL: 'https://memberships-a6f7c.firebaseio.com',
    storageBucket: 'memberships-a6f7c.appspot.com'
};
/*const firebaseAuthConfig = {
method: AuthMethods.Popup,
remember: 'default'
};
*/
//export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
var MemberlistModule = (function () {
    function MemberlistModule() {
    }
    MemberlistModule = __decorate([
        core_1.NgModule({
            declarations: [
                payment_component_1.PaymentComponent,
                ExtendedMembers_component_1.ExtendedMembersComponent,
                index_1.MemberlistComponent,
                filter_pipe_1.FilterPipe,
                maintenance_component_1.MaintenanceComponent,
                ems_component_1.EmsComponent
            ],
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
            ],
            exports: [
                index_1.MemberlistComponent,
                maintenance_component_1.MaintenanceComponent,
                ExtendedMembers_component_1.ExtendedMembersComponent,
                ems_component_1.EmsComponent,
                filter_pipe_1.FilterPipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberlistModule);
    return MemberlistModule;
}());
exports.MemberlistModule = MemberlistModule;
//# sourceMappingURL=memberlist.module.js.map