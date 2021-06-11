import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {CalendarPage} from '../calendar/calendar.page';
import { UserService } from '../../../services/user.service';
import { first } from 'rxjs/operators';
import {format} from "date-fns";

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

    const titulo = this.registerTareaForm.value.titulo;
    const descripcion = this.registerTareaForm.value.descripcion;
    const fecha1 = this.registerTareaForm.value.fecha;
    const fecha2 = format(new Date(fecha1), "d-M-yyyy");
    const horaI1 = this.registerTareaForm.value.horaI;
    const horaI2 = format(new Date(horaI1), "HH:mm");
    const horaF1 = this.registerTareaForm.value.horaF;
    const horaF2 = format(new Date(horaF1), "HH:mm");

    let tarea = {'titulo': titulo, 'descripcion': descripcion, 'fecha': fecha2, 'horaI': horaI2, 'horaF': horaF2};

    this.userService.registerTask(tarea)
          .pipe(first())
          .subscribe(() => {
                  this.router.navigate(['/calendar/']);
              });
  }
 
}
