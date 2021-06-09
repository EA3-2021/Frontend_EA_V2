import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {CalendarPage} from '../calendar/calendar.page';
import { UserService } from '../../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {

  registerTareaForm: FormGroup;
  calendar:CalendarPage;
  submitted = false;
  dia:any;
  mes:any;
  año:any;
  fecha:any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { 
    }

  ngOnInit() {

    this.registerTareaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      horaI: ['', Validators.required],
      horaF: ['', Validators.required]
    });  
    
  }

  get formControls() { return this.registerTareaForm.controls; }

  submitRegisterTarea() {
    this.submitted = true;
    if (this.registerTareaForm.invalid) {
        return;
    }

    this.userService.registerTask(this.registerTareaForm.value)
          .pipe(first())
          .subscribe(() => {
                  this.router.navigate(['/calendar']);
              });
    
    console.log (this.registerTareaForm.value);

  }
 
}
