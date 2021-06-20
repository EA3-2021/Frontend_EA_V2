import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from '../model/user';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { 

  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({"Content-Type": 'application/x-www-form-urlencoded', "Accept": 'application/json', "authorization": JSON.parse(localStorage.getItem('currentUser'))["token"]});

    console.log(headers);

    return headers;
  }

  getTeams(companyName: string){
    return this.http.get<Team[]>(environment.apiURL + '/team/all/'+ companyName, { headers: this.getHeaders() });
  }

  newTeam(newTeam: Team, companyName: string) {
    return this.http.post(environment.apiURL + '/team/new/'+ companyName, newTeam, { headers: this.getHeaders()});
  }

  addUser( teamName: string, user: User) {
    return this.http.post(environment.apiURL + '/team/user-to-team/' + teamName, user, { headers: this.getHeaders() });
  }

  /*updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser, { headers: this.headers });
  }*/

  deleteTeam(teamName:string, companyName:string){
    return this.http.delete<Team[]>(environment.apiURL + '/team/drop/' + teamName +'/' + companyName, { headers: this.getHeaders() })
  }

  deleteUser(teamName:string,id:string, companyName:string){
    return this.http.delete<Team[]>(environment.apiURL + '/team/dropUser/' + teamName +'/' + companyName + '/'+ id, { headers: this.getHeaders() })
  }
  
}
