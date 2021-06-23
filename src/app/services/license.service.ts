import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private http: HttpClient) { 

  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({"Content-Type": 'application/x-www-form-urlencoded', "Accept": 'application/json', "authorization": JSON.parse(localStorage.getItem('currentUser'))["token"]});

    console.log(headers);

    return headers;
  }

  useLicense(licenseCode: string) {
    return this.http.post(environment.apiURL + '/license/use', {"licenseCode": licenseCode});
  }

  getLicense(email: string) {
    return this.http.post(environment.apiURL + '/license/obtain', {"email": email});
  }

}
