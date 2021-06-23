import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from '../model/message';
import { Chat } from '../model/chat';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { 

  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({"Content-Type": 'application/x-www-form-urlencoded', "Accept": 'application/json', "authorization": JSON.parse(localStorage.getItem('currentUser'))["token"]});

    console.log(headers);

    return headers;
  }

  getMessages(){
    return this.http.get<Chat[]>(environment.apiURL+'/message/all', { headers: this.getHeaders() })
  }

  newMessage(newMessage: Comment){
    return this.http.post(environment.apiURL + '/message/send', newMessage, { headers: this.getHeaders() });
  }

}
