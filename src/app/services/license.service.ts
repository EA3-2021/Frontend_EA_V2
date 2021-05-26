import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private http: HttpClient) { }

  checkLicense(licenseCode: string) {
    return this.http.get(environment.apiURL + '/admin/' +licenseCode);
  }

}
