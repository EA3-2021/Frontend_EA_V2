import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tarea } from '../model/tarea';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  deleteTask(titulo: String) {
    return this.http.delete<Tarea[]>(environment.apiURL+'/user/droptask/' + titulo);
  }

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(environment.apiURL+'/user/all')
  }

  newUser(newUser: User){
    return this.http.post(environment.apiURL + '/user/new', newUser);
  }

  deleteUser(name: string){
    return this.http.delete<User[]>(environment.apiURL+'/user/drop/' + name)
  }

  updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser);
  }

  deleteUsers(){
    return this.http.delete<User[]>(environment.apiURL+'/user/dropall')
  }

  registerTask(tarea:Tarea){
    return this.http.post(environment.apiURL + '/user/newtask', tarea);
  }

  getTareas(fecha:string){
    return this.http.get<Tarea[]>(environment.apiURL+'/user/taskall/' + fecha);
  }

}
