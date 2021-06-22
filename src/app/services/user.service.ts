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
    return this.http.get<User[]>(environment.apiURL+'/admin/all/' + companyName, { headers: this.getHeaders() })
  }

  getUser(workerID: String){
    return this.http.get<User[]>(environment.apiURL+'/user/profile/' + workerID, { headers: this.getHeaders() })
  }

  deleteUser(name: string){
    return this.http.delete<User[]>(environment.apiURL + '/user/drop/' + name, { headers: this.getHeaders() })
  }

  updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser, { headers: this.getHeaders() });
  }

  getTareas(workerID:string, fecha:string){
    return this.http.get<Tarea[]>(environment.apiURL + '/user/taskall/' + workerID +'/'+ fecha, { headers: this.getHeaders() });
  }

  saveLocation(location: Location){
    return this.http.post(environment.apiURL + '/user/newlocation', location, { headers: this.getHeaders() });
  }

  getPasswordUser(email:string){
    return this.http.get<User[]>(environment.apiURL+'/user/getPasswordUser' +'/'+ email);
  }

  holidayRequest(holidayRequest: Request){
    return this.http.post(environment.apiURL + '/user/holidayRequest', holidayRequest);
  }
  getWorkerID(companyName: string){
    return this.http.get<User[]>(environment.apiURL+'/admin/getWorkerID/' + companyName, { headers: this.getHeaders()});
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
    return this.http.post(environment.apiURL + '/user/configuration', configuration);
  }
  getlocationConfig(workerID: string){
    return this.http.get<Configuration[]>(environment.apiURL + '/user/locationConfiguration/' + workerID, {headers: this.getHeaders()});
  }
  getUsersforContacts(workerID: string){
    return this.http.get<User[]>(environment.apiURL+'/user/all/' + workerID, { headers: this.getHeaders() })
  }
}
