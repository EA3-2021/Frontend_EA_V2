import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Faq } from '../model/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { 

  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({"Content-Type": 'application/x-www-form-urlencoded', "Accept": 'application/json', "authorization": JSON.parse(localStorage.getItem('currentUser'))["token"]});

    console.log(headers);

    return headers;
  }

  getFaq(){
    return this.http.get<Faq[]>(environment.apiURL+'/faq/all', { headers: this.getHeaders() })
  }

  newFaq(newFaq: Faq){
    return this.http.post(environment.apiURL + '/faq/new', newFaq, { headers: this.getHeaders() });
  }

  deleteFaq(title: string){
    return this.http.delete<Faq[]>(environment.apiURL+'/faq/drop/' + title, { headers: this.getHeaders() })
  }

  updateFaq(title: string, content: string){
    return this.http.put(environment.apiURL + '/faq/update/' + title, content, { headers: this.getHeaders() });
  }

}
