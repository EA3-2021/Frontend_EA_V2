import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Chat } from '../model/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private http: HttpClient) { }

  getChats(){
    return this.http.get<Chat[]>(environment.apiURL+'/chat/all')
  }

  newChat(newChat: Comment){
    return this.http.post(environment.apiURL + '/chat/new', newChat);
  }


}
