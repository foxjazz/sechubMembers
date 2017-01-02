import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';

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
        this.usermode = "normal";
    }
    @Input()
    ems: Array<ExtendedMember>;
    @Output() OnSaved = new EventEmitter<boolean>();
    //@Output() OnSaved = new EventEmitter<boolean>();
    em: ExtendedMember;
    emd: ExtendedMember;
    mode: string;
    usermode: string;

    submitForm() {

        if(this.mode === "Add") {
            console.log('adding');
            this.ems.push(Object.assign({}, this.em));
        }
        else{
            this.Delete(this.emd);
            this.ems.push(this.em);
        }
        this.mode = "Add";
        this.usermode = "normal";
        this.OnSaved.emit(true);
    }

    Delete(p: ExtendedMember){
        let index = this.ems.indexOf(p, 0);
        if (index > -1) {
            this.ems.splice(index, 1);
        }
    }
    onDelete(){
        let index = this.ems.indexOf(this.emd, 0);
        if (index > -1) {
            this.ems.splice(index, 1);
        }
    }

    onEdit(){
        this.usermode = 'screenMember';
    }
    onAdd(){
        this.em = new ExtendedMember();
        this.usermode = 'edit';
    }
    onDiscard(){
        this.usermode = 'normal';
    }
    public onUsingTable(em :ExtendedMember){
        this.em = Object.assign({},em);
        this.emd = em;
            this.mode= "Save";
    }
    ngOnInit(){
        this.mode = "Add";
    }
}


/**
 * Created by fox21 on 12/18/2016.
 */

