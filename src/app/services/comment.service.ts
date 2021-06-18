import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment } from '../model/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', JSON.parse(localStorage.getItem('currentUser'))["token"]);

  }


  getComments(){
    return this.http.get<Comment[]>(environment.apiURL+'/comment/all', { headers: this.headers })
  }

  newComment(newComment: Comment){
    return this.http.post(environment.apiURL + '/comment/new', newComment, { headers: this.headers });
  }


}
