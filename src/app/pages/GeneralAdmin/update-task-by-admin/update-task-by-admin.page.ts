import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { first } from 'rxjs/operators';
import {format} from "date-fns";

@Component({
  selector: 'app-update-task-by-admin',
  templateUrl: './update-task-by-admin.page.html',
  styleUrls: ['./update-task-by-admin.page.scss'],
})
export class UpdateTaskByAdminPage implements OnInit {

  updateTareaForm: FormGroup;
  dia:any;
  mes:any;
  año:any;
  fecha:any;

  fechaPrint: string;
  horaIPrint: string;
  horaFPrint: string;

  data: any;

  _id: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService) { 
      this.data = this.route.snapshot.paramMap.get('companyName');
    }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.updateTareaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      horaI: ['', Validators.required],
      horaF: ['', Validators.required]
    }); 
  }

  get formControls() { return this.updateTareaForm.controls; }

  submitUpdateTarea() {

    var id = JSON.parse(localStorage.getItem("data"));

    const titulo = this.updateTareaForm.value.titulo;
    const descripcion = this.updateTareaForm.value.descripcion;
    const fecha1 = this.updateTareaForm.value.fecha;
    if (fecha1 != ""){
      this.fechaPrint = format(new Date(fecha1), "d-M-yyyy");
    }else{
      this.fechaPrint = this.updateTareaForm.value.fecha;
    }
    const horaI1 = this.updateTareaForm.value.horaI;
    if (horaI1 != ""){
      this.horaIPrint = format(new Date(horaI1), "HH:mm");
    }else{
      this.horaIPrint = this.updateTareaForm.value.horaI;
    }
    const horaF1 = this.updateTareaForm.value.horaF;
    if (horaF1 != ""){
      this.horaFPrint = format(new Date(horaF1), "HH:mm");
    }else{
      this.horaFPrint = this.updateTareaForm.value.horaF;
    }

    let tarea = {'titulo': titulo, 'descripcion': descripcion, 'fecha': this.fechaPrint, 'horaI': this.horaIPrint, 'horaF': this.horaFPrint};

    this.adminService.updateTask(id, tarea).subscribe(() => {this.router.navigate(['/calendar-admin/' + this.data])
      .then(() => {
        window.location.reload();
      });
    });
  }

}
