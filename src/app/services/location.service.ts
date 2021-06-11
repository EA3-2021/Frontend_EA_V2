import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))["token"]);

  }

  getGeolocation(){
    return this.http.get<Location[]>(environment.apiURL+'/location/all', { headers: this.headers })
  }
}


