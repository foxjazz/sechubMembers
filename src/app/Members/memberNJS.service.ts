/**
 * Created by fox21 on 12/30/2016.
 */
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Member, ExtendedMember, IPayment, AllIds} from './member.model';
import {config, confignjs} from './config';
import 'rxjs/add/operator/catch';
@Injectable()
export class MemberNJSService
{
    private http;
    constructor(private h: Http)
    {
        this.http = h;
    }

    public getAllDocs(): Observable<Array<Member>>
    {
        let uri = confignjs.hostlocal + '/couchDataAll';
        return this.http.get(uri)
            .map((res: Response) => res.json());
    }
    public getDoc(id: string): Observable<Member>{
        let uri = confignjs.hostlocal + '/couchGet';
        return this.http.get(uri + '?id=' + id)
            .map((res: Member) => res);
    }
    private q2: Array<Member>;
    private save(uri: string,data: string) : any{
        // this won't actually work because the StarWars API doesn't
        // is read-only. But it would look like this:

        let ret = new Member('',false);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers } );
        return this.http.post(uri, data, options).map(x => x.json());
/*
        return Observable.from(this.q2).flatMap(res => {
            this.http.post(uri, data, options)
                .do((res: Response) => {
                    let js = res.json();
                    let m: Member;
                    m= JSON.parse(data);
                    m._rev = js.rev;
                    ret = m;

                });

            });
*/

    }
    public testSave(){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers } );
        let uri = confignjs.hostlocal + '/couchSave';
        let data = '{"testField:": "testVariable"';
        this.http.post(uri, JSON.stringify(data), options).map(x => x.json())
            .catch(alert(JSON.stringify(this)));
    }
    public putDoc(member: Member) {

        let uri = confignjs.hostlocal + '/couchSave';
        let geturi = confignjs.hostlocal + '/couchGet';
        let result =  this.save(uri,JSON.stringify(member));
        member._rev = result.rev;
        this.getDoc(member._id).subscribe(j => {
            member = j;
        });


    };



}
