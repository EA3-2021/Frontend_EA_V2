import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tarea } from '../model/tarea';
import { User } from '../model/user';
import { Location } from '../model/location';
import { Request } from '../model/request';

import { Configuration } from '../model/configuration';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({"Content-Type": 'application/x-www-form-urlencoded', "Accept": 'application/json', "authorization": JSON.parse(localStorage.getItem('currentUser'))["token"]});

    return headers;
  }

  registerUser(registerUser: User){

    return this.http.post(environment.apiURL + '/user/registerUser', registerUser);
  }

  getUsers(companyName: string){
    return this.http.get<User[]>(environment.apiURL+'/user/all/' + companyName, { headers: this.getHeaders() })
  }

  getUser(workerID: String){
    return this.http.get<User[]>(environment.apiURL+'/user/profile/' + workerID, { headers: this.getHeaders() })
  }

  newUser(newUser: User){
    return this.http.post(environment.apiURL + '/user/new', newUser, { headers: this.getHeaders() });
  }

  deleteUser(name: string){
    return this.http.delete<User[]>(environment.apiURL + '/user/drop/' + name, { headers: this.getHeaders() })
  }

  updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser, { headers: this.getHeaders() });
  }

  /*registerTask(tarea:Tarea){
    return this.http.post(environment.apiURL + '/user/newtask', tarea, { headers: this.headers });
  }*/

  getTareas(workerID:string, fecha:string){
    return this.http.get<Tarea[]>(environment.apiURL + '/user/taskall/' + workerID +'/'+ fecha, { headers: this.getHeaders() });
  }

  /*deleteTask(titulo: String) {
    return this.http.delete<Tarea[]>(environment.apiURL + '/user/droptask/' + titulo, { headers: this.headers });
  }*/

  saveLocation(location: Location){
    return this.http.post(environment.apiURL + '/user/newlocation', location, { headers: this.getHeaders() });
  }

  getRegisterRequest(){
    return this.http.get<User[]>(environment.apiURL + '/user/register/Requests', { headers: this.getHeaders() });
  }

  refuseRegisterRequest(workerID:string, email1:string){
    return this.http.delete<User[]>(environment.apiURL+'/user/drop/registerRequest/' + workerID + '/' + email1, { headers: this.getHeaders() });
  }

  acceptRegisterRequest(workerID:string, email:string){
    return this.http.put(environment.apiURL + '/user/accept/' + workerID + '/' + email, email, { headers: this.getHeaders() });
  }

  getPasswordUser(email:string){
    return this.http.get<User[]>(environment.apiURL+'/user/getPasswordUser' +'/'+ email, { headers: this.getHeaders() });
  }

  holidayRequest(holidayRequest: Request){
    return this.http.post(environment.apiURL + '/user/holidayRequest', holidayRequest, { headers: this.getHeaders() });
  }
  getWorkerID(companyName: string){
    return this.http.get<User[]>(environment.apiURL+'/user/getWorkerID/' + companyName, { headers: this.getHeaders()});
  }

  getHolidayPending(companyName: string){
    return this.http.get<Request[]>(environment.apiURL+'/user/getHolidayPending/'+ companyName, { headers: this.getHeaders() });
  }

  acceptHoliday(id:string){
    return this.http.put(environment.apiURL + '/user/acceptHoliday/'+id, id, {headers: this.getHeaders()});
  }

  refuseHoliday(id:string){
    return this.http.delete<Request[]>(environment.apiURL+'/user/dropRequestHoliday/'+id, {headers: this.getHeaders()});
  }

  getHolidays(workerID: string, fecha: string){
    return this.http.get<Request[]>(environment.apiURL + '/user/holidayall/' + workerID +'/'+ fecha, {headers: this.getHeaders()});
  }

  updateUserProfile(workerID: string, user:User) {
    return this.http.put(environment.apiURL + '/user/updateProfile/' + workerID, user);
  }

  clockIn(workerID: string, code: string ){
    return this.http.post(environment.apiURL + '/clock/clockIn/' + workerID + '/' + code, workerID, {headers: this.getHeaders()});
  }

  clockOut(workerID: string){
    return this.http.put(environment.apiURL + '/clock/clockOut/' + workerID, workerID, {headers: this.getHeaders()});
  }
  updateConfiguration(configuration: Configuration) {
    return this.http.post(environment.apiURL + '/user/configuration', configuration, { headers: this.getHeaders() });
  }
}
