import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { first } from 'rxjs/operators';
import {format} from "date-fns";

@Component({
  selector: 'app-tasks-by-admin',
  templateUrl: './tasks-by-admin.page.html',
  styleUrls: ['./tasks-by-admin.page.scss'],
})
export class TasksByAdminPage implements OnInit {

  registerTareaForm: FormGroup;
  submitted = false;
  dia:any;
  mes:any;
  año:any;
  fecha:any;

  data: any;
  data2: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService) { 
      this.data = this.route.snapshot.paramMap.get('companyName');
      this.data2 = this.route.snapshot.paramMap.get('workerID');
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

    const workerID = this.data2;
    const titulo = this.registerTareaForm.value.titulo;
    const descripcion = this.registerTareaForm.value.descripcion;
    const fecha1 = this.registerTareaForm.value.fecha;
    const fecha2 = format(new Date(fecha1), "d-M-yyyy");
    const horaI1 = this.registerTareaForm.value.horaI;
    const horaI2 = format(new Date(horaI1), "HH:mm");
    const horaF1 = this.registerTareaForm.value.horaF;
    const horaF2 = format(new Date(horaF1), "HH:mm");

    let tarea = {'workerID': workerID, 'titulo': titulo, 'descripcion': descripcion, 'fecha': fecha2, 'horaI': horaI2, 'horaF': horaF2};

    this.adminService.registerTask(tarea)
          .pipe(first())
          .subscribe(() => {
                  this.router.navigate(['/calendar-admin/' + this.data]);
              });
              console.log(tarea);
  }
}
