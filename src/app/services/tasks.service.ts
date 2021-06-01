import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get<Task[]>(environment.apiURL+'/task/all')
  }

  newTask(newTask: Task){
    return this.http.post(environment.apiURL + '/task/new', newTask);
  }

  deleteTask(name: string){
    return this.http.delete<Task[]>(environment.apiURL+'/task/drop/' + name)
  }

  updateTask(_id: string, updateTask: Task){
    return this.http.put(environment.apiURL + '/task/update/' + _id, updateTask);
  }

  deleteTasks(){
    return this.http.delete<Task[]>(environment.apiURL+'/task/dropall')
  }
}
