import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from '../model/message';
import { Chat } from '../model/chat';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', JSON.parse(localStorage.getItem('currentUser'))["token"]);

  }

  getMessages(){
    return this.http.get<Chat[]>(environment.apiURL+'/message/all', { headers: this.headers })
  }

  newMessage(newMessage: Comment){
    return this.http.post(environment.apiURL + '/message/send', newMessage, { headers: this.headers });
  }

}
