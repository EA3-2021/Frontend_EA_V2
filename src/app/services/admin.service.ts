import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { Configuration } from '../model/configuration';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../model/location';
import { Tarea } from '../model/tarea';
import { Request } from '../model/request';
import { Clock } from '../model/clock';
import { Code } from '../model/code';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {

  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({"Content-Type": 'application/x-www-form-urlencoded', "Accept": 'application/json', "authorization": JSON.parse(localStorage.getItem('currentUser'))["token"]});

    console.log(headers);

    return headers;
  }

  registerAdmin(admin: Admin) {
    return this.http.post(environment.apiURL + '/admin/register-admin', admin);
  }

  updateConfiguration(configuration: Configuration) {
    return this.http.post(environment.apiURL + '/admin/configuration', configuration, { headers: this.getHeaders() });
  }

  getLocations(){
    return this.http.get<Location[]>(environment.apiURL+'/location/getLocations');
  }

  getAdminName(){
    return this.http.get<Admin[]>(environment.apiURL+'/admin/getAdminName');
  }

  getPasswordAdmin(email:string){
    return this.http.get<Admin[]>(environment.apiURL+'/admin/getPasswordAdmin' +'/'+ email);
  }

  registerTask(tarea:Tarea){
    return this.http.post(environment.apiURL + '/admin/newtask', tarea);
  }

  getTareas(fecha:string, company:string){
    return this.http.get<Tarea[]>(environment.apiURL+'/admin/taskall/' + fecha + '/' + company, { headers: this.getHeaders() });
  }

  deleteTask(id: string) {
    return this.http.delete<Tarea[]>(environment.apiURL+'/admin/droptask/' + id);
  }

  updateTask(_id: string, updateTarea: Tarea){
    return this.http.put(environment.apiURL + '/admin/updatetask/' + _id, updateTarea);
  }

  getClock(clockIn:string){
    return this.http.get<Clock[]>(environment.apiURL+'/clock/getClock/' + clockIn);
  }
  getAdmin(company: String){
    return this.http.get<Admin[]>(environment.apiURL+'/admin/profile/' + company)
  }

  generateCode(companyName: String){
    return this.http.post(environment.apiURL + '/admin/generate/code/' + companyName, companyName);
  }

  getCode(companyName: String, date: String){
    return this.http.get<Code[]>(environment.apiURL+'/admin/getCode/' + companyName +'/'+ date);
  }

  updateAdminProfile(companyName: String, admin: Admin){
    return this.http.put(environment.apiURL + '/admin/updateAdminProfile/' + companyName, admin);
  }
  //, { headers: this.getHeaders() }

  getRegisterRequest(){
    return this.http.get<User[]>(environment.apiURL + '/user/register/Requests', { headers: this.getHeaders() });
  }

  
  refuseRegisterRequest(workerID:string, email1:string){
    return this.http.delete<User[]>(environment.apiURL+'/user/drop/registerRequest/' + workerID + '/' + email1, { headers: this.getHeaders() });
  }

  acceptRegisterRequest(workerID:string, email:string){
    return this.http.put(environment.apiURL + '/user/accept/' + workerID + '/' + email, email, { headers: this.getHeaders() });
  }

  newUser(newUser: User){
    return this.http.post(environment.apiURL + '/admin/new', newUser);
  }

  getHolidayPending(companyName: string){
    return this.http.get<Request[]>(environment.apiURL+'/admin/getHolidayPending/'+ companyName);
  }

  acceptHoliday(id:string){
    return this.http.put(environment.apiURL + '/admin/acceptHoliday/'+id, id);
  }

  refuseHoliday(id:string){
    return this.http.delete<Request[]>(environment.apiURL+'/admin/dropRequestHoliday/'+id);
  }
  
}
