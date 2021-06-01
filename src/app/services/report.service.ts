import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Report } from '../model/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReports(){
    return this.http.get<Report[]>(environment.apiURL+'/report/all')
  }

  newReport(newReport: Report){
    return this.http.post(environment.apiURL + '/report/new', newReport);
  }

  deleteReport(affair: string){
    return this.http.delete<Report[]>(environment.apiURL+'/report/drop/' + affair)  //DE MOMENTO SE BORRARIAN TODOS LOS REPORTS CON ESE AFFAIR
  }

  //Llamada API: Update user
  updateReport(_id: string, updateReport: Report){
    return this.http.put(environment.apiURL + '/report/update/' + _id, updateReport);
  }

  deleteReports(){
    return this.http.delete<Report[]>(environment.apiURL+'/report/dropall')
  }

}
