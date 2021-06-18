import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', JSON.parse(localStorage.getItem('currentUser'))["token"]);

  }

  useLicense(licenseCode: string) {
    return this.http.post(environment.apiURL + '/license/use', {"licenseCode": licenseCode});
  }

  getLicense(email: string) {
    return this.http.post(environment.apiURL + '/license/obtain', {"email": email});
  }

}
