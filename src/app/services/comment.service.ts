import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment } from '../model/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get<Comment[]>(environment.apiURL+'/comment/all')
  }

  newComment(newComment: Comment){
    return this.http.post(environment.apiURL + '/comment/new', newComment);
  }



}
