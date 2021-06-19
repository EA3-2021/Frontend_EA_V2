import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tarea } from '../model/tarea';
import { User } from '../model/user';
import { Location } from '../model/location';
import { Request } from '../model/request';
import { Clock } from '../model/clock';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Accept', 'application/json');

  }

  getHeaders() : HttpHeaders{

    if (!this.headers.has('Authorization')) {

      this.headers.append('Authorization', JSON.parse(localStorage.getItem('currentUser'))["token"]);

    }

    return this.headers;

  }

  registerUser(registerUser: User){

    return this.http.post(environment.apiURL + '/user/registerUser', registerUser);
  }

  getUsers(companyName: string){
    return this.http.get<User[]>(environment.apiURL+'/user/all/' + companyName)
  }

  getUser(workerID: String){
    return this.http.get<User[]>(environment.apiURL+'/user/profile/' + workerID, { headers: this.getHeaders() })
  }

  newUser(newUser: User){
    return this.http.post(environment.apiURL + '/user/new', newUser);
  }

  deleteUser(name: string){
    return this.http.delete<User[]>(environment.apiURL + '/user/drop/' + name, { headers: this.getHeaders() })
  }

  updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser);
  }

  /*registerTask(tarea:Tarea){
    return this.http.post(environment.apiURL + '/user/newtask', tarea, { headers: this.headers });
  }*/

  getTareas(workerID:string, fecha:string){
    return this.http.get<Tarea[]>(environment.apiURL + '/user/taskall/' + workerID +'/'+ fecha);
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
    return this.http.put(environment.apiURL + '/user/acceptHoliday/'+id, id);
  }

  refuseHoliday(id:string){
    return this.http.delete<Request[]>(environment.apiURL+'/user/dropRequestHoliday/'+id);
  }

  getHolidays(workerID: string, fecha: string){
    return this.http.get<Request[]>(environment.apiURL + '/user/holidayall/' + workerID +'/'+ fecha);
  }

  updateUserProfile(workerID: string, user:User) {
    return this.http.put(environment.apiURL + '/user/updateProfile/' + workerID, user);
  }

  clockIn(workerID: string){
    return this.http.post(environment.apiURL + '/clock/clockIn',workerID);
  }
  clockOut(workerID: string){
    return this.http.put(environment.apiURL + '/clock/clockOut',workerID);
  }

/*
  updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser);
  }
*/
}
