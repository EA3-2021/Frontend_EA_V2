import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Chat } from '../model/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { 

  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({"Content-Type": 'application/x-www-form-urlencoded', "Accept": 'application/json', "authorization": JSON.parse(localStorage.getItem('currentUser'))["token"]});

    console.log(headers);

    return headers;
  }

  getChats(){
    return this.http.get<Chat[]>(environment.apiURL+'/chat/all', { headers: this.getHeaders() })
  }

  newChat(newChat: Comment){
    return this.http.post(environment.apiURL + '/chat/new', newChat, { headers: this.getHeaders() });
  }


}
