import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor(private http: HttpClient) { }

  getClocks(){
    return this.http.get<Clock[]>(environment.apiURL+'/clock/all')
  }
}


