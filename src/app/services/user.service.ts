import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tarea } from '../model/tarea';
import { User } from '../model/user';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))["token"]);

  }

  registerUser(registerUser: User){

    return this.http.post(environment.apiURL + '/user/registerUser', registerUser);
  }

  getUsers(){
    return this.http.get<User[]>(environment.apiURL + '/user/all')
  }

  getUser(id: String){
    return this.http.get(environment.apiURL+'/user/' + id, { headers: this.headers })
  }
  
  /*newUser(newUser: User){
    return this.http.post(environment.apiURL + '/user/new', newUser);
  }*/

  deleteUser(name: string){
    return this.http.delete<User[]>(environment.apiURL + '/user/drop/' + name, { headers: this.headers })
  }

  /*updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser);
  }*/

  deleteUsers(){
    return this.http.delete<User[]>(environment.apiURL + '/user/dropall', { headers: this.headers })
  }

  registerTask(tarea:Tarea){
    return this.http.post(environment.apiURL + '/user/newtask', tarea, { headers: this.headers });
  }

  getTareas(fecha:string){
    return this.http.get<Tarea[]>(environment.apiURL + '/user/taskall/' + fecha, { headers: this.headers });
  }

  deleteTask(titulo: String) {
    return this.http.delete<Tarea[]>(environment.apiURL + '/user/droptask/' + titulo, { headers: this.headers });
  }
  
  saveLocation(location: Location){
    return this.http.post(environment.apiURL + '/user/newlocation', location, { headers: this.headers });
  }

  getRegisterRequest(){
    return this.http.get<User[]>(environment.apiURL + '/user/register/Requests', { headers: this.headers });
  }

  refuseRegisterRequest(workerID:string){
    return this.http.delete<User[]>(environment.apiURL + '/user/drop/registerRequest/' + workerID, { headers: this.headers });
  }

  acceptRegisterRequest(workerID:string,email:string){
    return this.http.put(environment.apiURL + '/user/accept/' + workerID, email, { headers: this.headers });
  }

}
