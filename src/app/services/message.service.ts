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

  }

  getHeaders() : HttpHeaders{

    if (!this.headers.has('Authorization')) {

      this.headers.append('Authorization', JSON.parse(localStorage.getItem('currentUser'))["token"]);

    }

    return this.headers;

  }

  getMessages(){
    return this.http.get<Chat[]>(environment.apiURL+'/message/all', { headers: this.getHeaders() })
  }

  newMessage(newMessage: Comment){
    return this.http.post(environment.apiURL + '/message/send', newMessage, { headers: this.getHeaders() });
  }

}
