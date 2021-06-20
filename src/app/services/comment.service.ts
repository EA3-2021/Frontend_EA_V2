import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment } from '../model/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { 

  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({"Content-Type": 'application/x-www-form-urlencoded', "Accept": 'application/json', "authorization": JSON.parse(localStorage.getItem('currentUser'))["token"]});

    console.log(headers);

    return headers;
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
