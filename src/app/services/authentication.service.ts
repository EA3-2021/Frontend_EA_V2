import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user';
import { Admin } from '../model/admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


    constructor(private http: HttpClient) {
    }

    getHeaders(): HttpHeaders {
        const headers = new HttpHeaders({"Content-Type": 'application/x-www-form-urlencoded', "Accept": 'application/json', "authorization": JSON.parse(localStorage.getItem('currentUser'))["token"]});

        console.log(headers);

        return headers;
    }

    loginUser(workerID, password) {
        return this.http.post<any>(environment.apiURL+ '/auth/loginUser', {workerID, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }));
    }

    loginUserGoogle(workerID, password) {
        return this.http.post<any>(environment.apiURL+ '/auth/loginUserGoogle', {workerID, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }));
    }

    loginAdmin(name, password) {
        return this.http.post<any>(environment.apiURL+ '/auth/login-admin', { name, password })
            .pipe(map(admin => {
                localStorage.setItem('currentUser', JSON.stringify(admin));
                return admin;
            }));
    }

    /*logout() {
        const t = {"token": localStorage.getItem("ACCESS_TOKEN")};
        return this.http.put(environment.apiURL + "/auth/signoutUser", t);
    }*/

    logout() {
        const t = JSON.parse(localStorage.getItem('currentUser'))["token"];

        const ret = this.http.put(environment.apiURL + "/auth/signoutUser", {"token": t}, {headers: this.getHeaders()});

        if (ret) {
            localStorage.removeItem('currentUser');
        }

        localStorage.removeItem('workerID');
        
        return ret;
    }
    
}
