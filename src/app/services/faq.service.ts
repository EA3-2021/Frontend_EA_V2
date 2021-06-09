import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Faq } from '../model/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  getFaq(){
    return this.http.get<Faq[]>(environment.apiURL+'/faq/all')
  }

  newFaq(newFaq: Faq){
    return this.http.post(environment.apiURL + '/faq/new', newFaq);
  }

  deleteFaq(title: string){
    return this.http.delete<Faq[]>(environment.apiURL+'/faq/drop/' + title)
  }

  updateFaq(title: string, content: string){
    return this.http.put(environment.apiURL + '/faq/update/' + title, content);
  }

}
