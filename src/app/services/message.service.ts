import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(private http: HttpClient) { }

  getMessages(){
    return this.http.get<Chat[]>(environment.apiURL+'/message/all')
  }

  newMessage(newMessage: Comment){
    return this.http.post(environment.apiURL + '/message/send', sendMessage);
  }
}
