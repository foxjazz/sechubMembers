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
var member_model_1 = require('./member.model');
var payment_component_1 = require('./payment.component');
var router_1 = require('@angular/router');
var memberNJS_service_1 = require("./memberNJS.service");
var ems_component_1 = require("./ems.component");
//import { AngularFire, FirebaseListObservable } from 'angularfire2';
var MemberlistComponent = (function () {
    //  memberlist: FirebaseListObservable<any[]>;
    function MemberlistComponent(r, ms) {
        this.r = r;
        this.ms = ms;
        this.mode = "Add";
        this.router = r;
        this.memservice = ms;
        this.showCompleted = true;
        this.membercount = 0;
        this.firstNameFilter = "";
        this.lastNameFilter = "";
        this.activeFilter = false;
        this.selected = false;
        this.usermode = "normal";
        //    this.memberlist = af.database.list('./members');
    }
    MemberlistComponent.prototype.getPayments = function () {
        if (this.payments == null)
            this.payments = new Array();
        return this.payments;
    };
    MemberlistComponent.prototype.getExtended = function () {
        if (this.ems == null)
            this.ems = new Array();
        return this.ems;
    };
    MemberlistComponent.prototype.submitForm = function () {
        //let m = new Member('',false);
        //
        if (this.mode === "Add") {
            this.memberlist.push(this.member);
            this.member.index = this.memberlist.length;
            var d = new Date();
            var id = d.toString();
            this.memservice.putDoc(this.member);
        }
        else {
            //todo here remove and add the this.member to the list
            var newmember = Object.assign({}, this.member);
            this.memberlist.splice(this.member.index, 1);
            this.memberlist.push(newmember);
            this.memservice.putDoc(newmember);
            this.memberlist = this.memberlist.sort(function (left, right) { if (left.firstName < right.firstName)
                return -1;
            else
                return 1; });
            for (var i = 0; i < this.memberlist.length; i++) {
                this.memberlist[i].index = i;
            }
        }
        this.member = new member_model_1.Member('', false);
        this.mode = "Add";
        this.usermode = "normal";
    };
    /* delMember(i: number) {
         let res: string;
         this.memberlist[i].delete();
     }*/
    MemberlistComponent.prototype.onEdit = function () {
        this.usermode = 'screenMember';
    };
    MemberlistComponent.prototype.onAdd = function () {
        this.member = new member_model_1.Member('', false);
        this.usermode = 'screenMember';
    };
    MemberlistComponent.prototype.onDiscardMember = function () {
        this.usermode = 'normal';
        this.member = new member_model_1.Member('', false);
        this.selected = false;
    };
    MemberlistComponent.prototype.onUsingTable = function (al) {
        this.member = Object.assign({}, al);
        this.mode = "Save";
        this.ems = this.member.ExtendedMembers;
        this.payments = this.member.payments;
        this.selected = true;
        /*
        if(event.target["id"] === "Select")
        {
            this.member = al;
            this.mode = "Save";

        }
        if(event.target["id"] === "Payments")
        {
            if(al.payments == null || al.payments.length == 0)
            {
                let newpay = {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
                al.payments.push(newpay);
            }
            this.payments = al.payments;
        }

        else if (event.target["id"]==="Remove"){
            al.delete();
        }
        if(event.target["id"]==="ems"){
            //redirectTo: '/dashboard'
            localStorage.setItem('member',JSON.stringify(al));
            this.router.navigate(['/extendedMembers']);
            //this.router.navigate(['/extendedMembers', 'member']);
        }*/
    };
    /* ngOnDestroy(){
         localStorage.setItem('members', JSON.stringify(this.memberlist));
         localStorage.setItem('members', JSON.stringify(new Date().getTime()));
     }*/
    MemberlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var res;
        //Here we do the initial call to get all of the id's from the database.
        //we are making the assumption that the data is in  a format we can use. validation is not yet implemented
        this.memberlist = new Array();
        if (this.from === 'extended') {
            res = localStorage.getItem('members');
            if (res != null && res.indexOf('phone') > 0) {
                this.from = 'extended'; //because local storage failed somehow
            }
            else {
                this.memberlist = new Array();
                this.member = new member_model_1.Member('', false);
            }
        }
        if (this.from !== 'extended') {
            this.ms.getAllDocs().subscribe(function (r1) {
                //this.memberlist = r1;
                _this.memberlist = r1.sort(function (left, right) {
                    var ln;
                    var rn;
                    if (left.firstName != null) {
                        ln = left.firstName.toLowerCase();
                    }
                    else
                        ln = "";
                    if (right.firstName != null) {
                        rn = right.firstName.toLowerCase();
                    }
                    else
                        rn = "";
                    //return (ln < rn) ? -1 : (ln > rn) ? 1: 0;
                    if (ln < rn)
                        return -1;
                    if (ln > rn)
                        return 1;
                    else
                        return 0;
                });
                for (var i = 0; i < _this.memberlist.length; i++) {
                    _this.memberlist[i].index = i;
                }
            });
        }
        /*
           res = localStorage.getItem('members');
           if(res != null && res.indexOf('phone') > 0) {
               this.memberlist = JSON.parse(res);
               this.member = this.memberlist[0];
           }
           else{
               this.memberlist = new Array<Member>();
               this.member = new Member('',false);
   
           }
          */
        this.member = new member_model_1.Member('', false);
        this.membercount = this.memberlist.length;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemberlistComponent.prototype, "from", void 0);
    MemberlistComponent = __decorate([
        core_1.Component({
            selector: 'as-memberlist',
            providers: [memberNJS_service_1.MemberNJSService, payment_component_1.PaymentComponent, ems_component_1.EmsComponent],
            templateUrl: 'app/members/memberlist.html',
            styleUrls: ['app/members/member.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, memberNJS_service_1.MemberNJSService])
    ], MemberlistComponent);
    return MemberlistComponent;
}());
exports.MemberlistComponent = MemberlistComponent;
//# sourceMappingURL=memberlist.component.js.map