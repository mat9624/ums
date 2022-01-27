/* eslint-disable @typescript-eslint/naming-convention */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { User } from '../classes/user';
import { LoginCommand } from '../commands/login.command';
import { RegisterCommand } from '../commands/register.command';
import { DeleteCommand } from '../commands/delete.command';

@Injectable({
    providedIn: 'root'
})

export class UmsService{
    private static UMS_URL='http://localhost:8080/ums';

    constructor(private http: HttpClient){}

    login(loginCmd: LoginCommand){
        return this.http.post<User[]>(UmsService.UMS_URL+'/getUser',loginCmd);
    }

    register(registerCmd: RegisterCommand){
        return this.http.post<User>(UmsService.UMS_URL+'/create',registerCmd);
    }

    delete(deleteCmd: DeleteCommand){
        return this.http.post<User>(UmsService.UMS_URL+"/delete", deleteCmd);
    }



}
