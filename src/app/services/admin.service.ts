import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { Configuration } from '../model/configuration';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))["token"]);

  }

  registerAdmin(admin: Admin) {
    return this.http.post(environment.apiURL + '/admin/register-admin', admin);
  }

  updateConfiguration(configuration: Configuration) {
    return this.http.post(environment.apiURL + '/admin/configuration', configuration, { headers: this.headers });
  }

  getLocations(){
    return this.http.get<Location[]>(environment.apiURL+'/location/getLocations', { headers: this.headers });
  }

  getAdminName(){
    return this.http.get<Admin[]>(environment.apiURL+'/admin/getAdminName', { headers: this.headers });
  }
}
