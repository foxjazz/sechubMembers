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
    /* public handleError(error: Response) {
     console.error(error);
     return Observable.throw(error.json().error || 'Server error');
     }
     private handleError2 (error: Response | any) {
     // In a real world app, we might use a remote logging infrastructure
     let errMsg: string;
     if (error instanceof Response) {
     const body = error.json() || '';
     const err = body.error || JSON.stringify(body);
     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
     errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Observable.throw(errMsg);
     }*/
    public getAllDocs(): Observable<Array<Member>>
    {
        let uri = confignjs.hostlocal + '/couchDataAll';
        return this.http.get(uri)
            .map((res: Response) => res.json());
    }

    private save(uri: string,data: string) : Observable<Response>{
        // this won't actually work because the StarWars API doesn't
        // is read-only. But it would look like this:
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers } );
        return this.http
            .post(uri, data, options);
    }
    public putDoc(id: string, val: string): Observable<Member>{
        let uri = confignjs.hostlocal + '/couchSave';
        this.save(uri,val).subscribe(data => {
            console.log(data.json());
            console.log('saved data?');
        });

        return this.http.get(uri + '?id=' + id)
            .map((res: Response) => res.json());

    };



}
