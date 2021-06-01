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
    return this.http.get<User[]>(environment.apiURL+'/user/all')
  }

  newMessage(newMessage: Message){
    return this.http.post(environment.apiURL + '/message/new', newMessage);
  }

  deleteMessage(_id: string){
    return this.http.delete<User[]>(environment.apiURL+'/message/drop/' + _id)
  }

  //Llamada API: Update message
  updateMessage(_id: string, updateMessage: Message){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateMessage);
  }

  deleteMessages(){
    return this.http.delete<Message[]>(environment.apiURL+'/message/dropall')
  }
}
