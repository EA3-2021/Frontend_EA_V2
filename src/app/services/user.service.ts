import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tarea } from '../model/tarea';
import { User } from '../model/user';
import { Location } from '../model/location';
import { Request } from '../model/request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(registerUser: User){
    return this.http.post(environment.apiURL + '/user/registerUser', registerUser);
  }

  getUsers(){
    return this.http.get<User[]>(environment.apiURL+'/user/all')
  }

  /*newUser(newUser: User){
    return this.http.post(environment.apiURL + '/user/new', newUser);
  }*/

  deleteUser(name: string){
    return this.http.delete<User[]>(environment.apiURL+'/user/drop/' + name)
  }

  /*updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser);
  }*/

  deleteUsers(){
    return this.http.delete<User[]>(environment.apiURL+'/user/dropall')
  }

  registerTask(tarea:Tarea){
    return this.http.post(environment.apiURL + '/user/newtask', tarea);
  }

  getTareas(fecha:string){
    return this.http.get<Tarea[]>(environment.apiURL+'/user/taskall/' + fecha);
  }

  deleteTask(titulo: String) {
    return this.http.delete<Tarea[]>(environment.apiURL+'/user/droptask/' + titulo);
  }
  
  saveLocation(location: Location){
    return this.http.post(environment.apiURL + '/user/newlocation', location);
  }

  getRegisterRequest(){
    return this.http.get<User[]>(environment.apiURL+'/user/register/Requests');
  }

  refuseRegisterRequest(workerID:string, email1:string){
    return this.http.delete<User[]>(environment.apiURL+'/user/drop/registerRequest/' + workerID + '/' + email1);
  }

  acceptRegisterRequest(workerID:string, email:string){
    return this.http.put(environment.apiURL + '/user/accept/' + workerID + '/' + email, email);
  }

  getPasswordUser(email:string){
    return this.http.get<User[]>(environment.apiURL+'/user/getPasswordUser' +'/'+ email);
  }

  holidayRequest(holidayRequest: Request, workerID: string){
    return this.http.post(environment.apiURL + '/user/holidayRequest' + workerID, holidayRequest);
  }
}
