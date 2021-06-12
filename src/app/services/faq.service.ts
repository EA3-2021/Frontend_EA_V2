import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Faq } from '../model/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))["token"]);

  }

  getFaq(){
    return this.http.get<Faq[]>(environment.apiURL+'/faq/all')
  }

  newFaq(newFaq: Faq){
    return this.http.post(environment.apiURL + '/faq/new', newFaq, { headers: this.headers });
  }

  deleteFaq(title: string){
    return this.http.delete<Faq[]>(environment.apiURL+'/faq/drop/' + title, { headers: this.headers })
  }

  updateFaq(title: string, content: string){
    return this.http.put(environment.apiURL + '/faq/update/' + title, content, { headers: this.headers });
  }

}
