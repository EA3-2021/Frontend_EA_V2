import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from '../model/user';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', JSON.parse(localStorage.getItem('currentUser'))["token"]);

  }

  getTeams(companyName: string){
    return this.http.get<Team[]>(environment.apiURL + '/team/all/'+ companyName, { headers: this.headers });
  }

  newTeam(newTeam: Team, companyName: string) {
    return this.http.post(environment.apiURL + '/team/new/'+ companyName, newTeam, { headers: this.headers });
  }

  addUser( teamName: string, user: User) {
    return this.http.post(environment.apiURL + '/team/user-to-team/' + teamName, user, { headers: this.headers });
  }

  /*updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser, { headers: this.headers });
  }*/

  deleteTeam(teamName:string, companyName:string){
    return this.http.delete<Team[]>(environment.apiURL + '/team/drop/' + teamName +'/' + companyName, { headers: this.headers })
  }

  deleteUser(teamName:string,id:string, companyName:string){
    return this.http.delete<Team[]>(environment.apiURL + '/team/dropUser/' + teamName +'/' + companyName + '/'+ id, { headers: this.headers })
  }
  
}
