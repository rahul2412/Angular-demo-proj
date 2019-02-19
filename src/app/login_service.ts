import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs'

@Injectable()
export class LoginService {
    subj: Subject<string>=new Subject<string>();
    setName(name:string)
    {
this.subj.next(name);
    }
    getName():Observable<string>{
        return this.subj.asObservable();
    }
}