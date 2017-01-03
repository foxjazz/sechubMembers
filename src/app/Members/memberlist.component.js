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
//import {EmsComponent} from "./ems.component";
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
    MemberlistComponent.prototype.getMember = function () {
        return this.member;
    };
    /*
        getExtended(): Array<ExtendedMember>{
            if(this.ems == null)
                this.ems = new Array<ExtendedMember>();
            return this.ems;
        }
    */
    MemberlistComponent.prototype.submitForm = function () {
        //let m = new Member('',false);
        //
        if (this.mode === "Add") {
            this.memberlist.push(this.member);
        }
        else {
            this.Delete(this.memberd); //referenced saved for possible deletes
            this.memberlist.push(this.member);
        }
        this.memberlist = this.memberlist.sort(function (left, right) {
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
        this.memservice.putDoc(this.member);
        this.mode = "Add";
        this.usermode = "normal";
    };
    MemberlistComponent.prototype.Delete = function (p) {
        var index = this.memberlist.indexOf(p, 0);
        if (index > -1) {
            this.memberlist.splice(index, 1);
        }
    };
    /* delMember(i: number) {
         let res: string;
         this.memberlist[i].delete();
     }*/
    MemberlistComponent.prototype.onAddFamily = function () {
        this.tempid = this.member._id;
        this.member = new member_model_1.Member('', false);
        this.member.parentID = this.tempid;
        this.member.isFamily = true;
        this.usermode = 'screenMember';
    };
    MemberlistComponent.prototype.onSave = function (b) {
        console.log("emitted from output");
        this.memservice.putDoc(this.member);
    };
    MemberlistComponent.prototype.onEdit = function () {
        this.usermode = 'screenMember';
    };
    MemberlistComponent.prototype.onAdd = function () {
        this.member = new member_model_1.Member('', false);
        this.usermode = 'screenMember';
    };
    MemberlistComponent.prototype.onDiscardMember = function () {
        this.usermode = 'normal';
        if (this.picked != null)
            this.member = this.picked;
        else
            this.member = new member_model_1.Member('', false);
        this.selected = false;
    };
    MemberlistComponent.prototype.onUsingTable = function (al) {
        this.member = Object.assign({}, al);
        this.memberd = al;
        this.picked = al;
        this.mode = "Save";
        //        this.ems = this.member.ExtendedMembers;
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
                for (var _i = 0, r1_1 = r1; _i < r1_1.length; _i++) {
                    var em = r1_1[_i];
                    if (em.payments != null)
                        em.payments = em.payments.sort(function (l, r) { if (l.receivedDate < r.receivedDate)
                            return 1; if (l.receivedDate > r.receivedDate)
                            return -1;
                        else
                            return 0; });
                }
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
                    if (ln < rn)
                        return -1;
                    if (ln > rn)
                        return 1;
                    else
                        return 0;
                });
                /*
                                for (let i = 0; i < this.memberlist.length; i++)
                                {
                                    this.memberlist[i].index = i;
                                }
                */
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
        //this.member = new Member('',false);
        this.membercount = this.memberlist.length;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemberlistComponent.prototype, "from", void 0);
    MemberlistComponent = __decorate([
        core_1.Component({
            selector: 'as-memberlist',
            providers: [memberNJS_service_1.MemberNJSService, payment_component_1.PaymentComponent],
            templateUrl: 'app/members/memberlist.html',
            styleUrls: ['app/members/member.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, memberNJS_service_1.MemberNJSService])
    ], MemberlistComponent);
    return MemberlistComponent;
}());
exports.MemberlistComponent = MemberlistComponent;
//# sourceMappingURL=memberlist.component.js.map