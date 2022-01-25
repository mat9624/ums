/* eslint-disable @typescript-eslint/naming-convention */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { User } from '../classes/user';

@Injectable({
    providedIn: 'root'
})

export class UmsService{
    private static UMS_URL='http://localhost:8080/ums';

    constructor(private http: HttpClient){}

    login(email: string, password: string){
        return this.http.get<User[]>(UmsService.UMS_URL+'/getUser/'+email+'-'+password);
    }

    register(user: User){
        return this.http.post<User>(UmsService.UMS_URL+'/create',user);
    }



}
