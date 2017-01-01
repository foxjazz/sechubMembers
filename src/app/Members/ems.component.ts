import {Component, Input, OnInit} from '@angular/core';

import {IPayment, Payment, ExtendedMember} from './member.model';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

    selector: 'as-extended',
    templateUrl: 'app/members/ems.html',
    styleUrls: ['app/members/member.css']
})
export class EmsComponent implements OnInit {
    constructor(){
        /*if(this.ems == null || this.ems.length === 0){
            this.em = new ExtendedMember();
            this.ems.push(this.em);
        }*/
    }
    @Input()
    ems: Array<ExtendedMember>;
    em: ExtendedMember;
    mode: string;
    datetry: any;

    submitForm() {

        if(this.mode === "Add") {
            console.log('adding');
            this.ems.push(Object.assign({}, this.em));
        }
        this.em = new ExtendedMember();
        this.mode = "Add";
        console.log('finished submit');
    }
    public onUsingTable(em :ExtendedMember){
        this.mode= "Save";
        this.em = em;

    }
    ngOnInit(){
        this.mode = "Add";
        /*
         for (let p of this.payments)
         {
         let d = new Date(p.receivedDate.valueOf());
         p.receivedDateString = d.toISOString();
         }
         */
    }
}


/**
 * Created by fox21 on 12/18/2016.
 */

