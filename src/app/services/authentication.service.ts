import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user';
import { Admin } from '../model/admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private currentAdminSubject: BehaviorSubject<Admin>;
    public currentAdmin: Observable<Admin>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

        this.currentAdminSubject = new BehaviorSubject<Admin>(JSON.parse(localStorage.getItem('currentAdmin')));
        this.currentAdmin = this.currentAdminSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentAdminValue(): Admin {
        return this.currentAdminSubject.value;
    }

    loginUser(workerID, password) {
        return this.http.post<any>(environment.apiURL+ '/auth/loginUser', {workerID, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    loginAdmin(name, password) {
        return this.http.post<any>(environment.apiURL+ '/auth/login-admin', { name, password })
            .pipe(map(admin => {
                localStorage.setItem('currentAdmin', JSON.stringify(admin));
                this.currentAdminSubject.next(admin);
                return admin;
            }));
    }

    logout() {
        const t = {"token": localStorage.getItem("ACCESS_TOKEN")};
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        return this.http.put(environment.apiURL + "signout", t);
    }

    /*signout(): Observable<any> {
        const t = {"token": localStorage.getItem("ACCESS_TOKEN")};
        return this.http.put(this.ruta + "signout", t);
      }*/
    
    addToken(token: string){
    localStorage.setItem("ACCESS_TOKEN", token);
    }
}
