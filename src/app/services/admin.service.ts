import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { Configuration } from '../model/configuration';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Location } from '../model/location';
import { Tarea } from '../model/tarea';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  registerAdmin(admin: Admin) {
    return this.http.post(environment.apiURL + '/admin/register-admin', admin);
  }

  updateConfiguration(configuration: Configuration) {
    return this.http.post(environment.apiURL + '/admin/configuration', configuration);
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

  getTareas(fecha:string){
    return this.http.get<Tarea[]>(environment.apiURL+'/admin/taskall/' + fecha);
  }

  deleteTask(titulo: String) {
    return this.http.delete<Tarea[]>(environment.apiURL+'/admin/droptask/' + titulo);
  }
}
