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

  }

  getHeaders() : HttpHeaders{
    if (!this.headers.has('Authorization')) {
      this.headers.append('Authorization', JSON.parse(localStorage.getItem('currentUser'))["token"]);
    }
    return this.headers;
  }

  getComments(workerID: string){
    return this.http.get<Comment[]>(environment.apiURL+'/comment/all/'+ workerID, { headers: this.getHeaders() })
  }

  newComment(newComment: Comment){
    return this.http.post(environment.apiURL + '/comment/new', newComment, { headers: this.getHeaders() });
  }

  deleteComment(id: string){
    return this.http.delete<Comment[]>(environment.apiURL + '/comment/drop/' + id, { headers: this.getHeaders() })
  }

  getCommentsAdmin(companyName: string){
    return this.http.get<Comment[]>(environment.apiURL+'/comment/all/admin/'+ companyName, { headers: this.getHeaders() })
  }

  resolveComment(id:string){
    return this.http.put(environment.apiURL + '/comment/resolve/'+ id, id, { headers: this.getHeaders() });
  }


}
