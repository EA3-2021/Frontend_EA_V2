import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private http: HttpClient) { }

  useLicense(licenseCode: string) {
    return this.http.post(environment.apiURL + '/license/use', {"licenseCode": licenseCode});
  }

  getLicense(email: string) {
    return this.http.post(environment.apiURL + '/license/obtain', {"email": email});
  }

}
