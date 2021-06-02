import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from '../model/user';
import { Setting } from '../model/setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) { }

  getSettingsUsers(){
    return this.http.get<Setting[]>(environment.apiURL+'/setting/all')
  }

  newSettingsUser(newSettingsUser: Setting){
    return this.http.post(environment.apiURL + '/setting/new', newSettingsUser);
  }

  updateSettingsUser(_id: string, updateSettingsUser: Setting){
    return this.http.put(environment.apiURL + '/setting/update/' + _id, updateSettingsUser);
  }




}
