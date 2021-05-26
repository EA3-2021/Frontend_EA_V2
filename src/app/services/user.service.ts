import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from '../model/user';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

/*
  getUsers(){
    return this.http.get<User[]>(environment.apiURL+'/user/all')
  }

  //Funcion registro usuario
  registerUser(user: User) {
    return this.http.post(environment.apiURL + '/auth/registerUser', user);
  }

  newUser(newUser: User){
    return this.http.post(environment.apiURL + '/user/new', newUser);
  }

  //Llamada API: Delete TODOS user
  deleteUsers(){
    return this.http.delete<User[]>(environment.apiURL+'/user/dropall')
  }

  //Llamada API: Delete un user
  deleteUser(name: string){
    return this.http.delete<User[]>(environment.apiURL+'/user/drop/' + name)
  }

  //Llamada API: Update user
  updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser);
  }

  */
}
