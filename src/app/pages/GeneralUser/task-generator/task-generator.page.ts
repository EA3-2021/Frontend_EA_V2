import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { TasksService } from '../../../services/tasks.service';
import { Task }from 'src/app/model/task';

@Component({
  selector: 'app-task-generator',
  templateUrl: './task-generator.page.html',
  styleUrls: ['./task-generator.page.scss'],
})
export class TaskGeneratorPage implements OnInit {
 
  taskForm: FormGroup;
  submitted = false;
  newTask: Task;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private TaskService: TasksService  
  ) {}

  ngOnInit() {
      this.taskForm = this.formBuilder.group({
          name: ['', Validators.required],
          startTime: ['', Validators.required],
          endTime: ['', Validators.required],
          day: ['', Validators.required],
          description: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get formControls() { return this.taskForm.controls; }

  submitTaskUser() {
      this.submitted = true;


      // stop here if form is invalid
      if (this.taskForm.invalid) {
          return;
      }
      const name = this.taskForm.value.name;
      const startTime = this.taskForm.value.startTime;
      const endTime = this.taskForm.value.endTime;
      const day = this.taskForm.value.day;
      const description = this.taskForm.value.description;
      let task = {'name': name, 'startTime': startTime, 'endTime': endTime, 'day': day, 'description': description};
      this.TaskService.newTask(task )
          .pipe(first())
          .subscribe(() =>  {
                 this.router.navigateByUrl('/tasks');
              },
              error => {
                  
              });
  }
  

}
