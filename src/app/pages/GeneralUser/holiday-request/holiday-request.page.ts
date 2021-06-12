import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {format} from "date-fns";
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import { Request } from '../../../model/request';

@Component({
  selector: 'app-holiday-request',
  templateUrl: './holiday-request.page.html',
  styleUrls: ['./holiday-request.page.scss'],
})
export class HolidayRequestPage implements OnInit {

  data:any;
  motivo: string;
  submitted = false;
  holidayRequestForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService) { 
    this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit() {
    
    this.holidayRequestForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
      fechaI: ['', Validators.required],
      fechaF: ['', Validators.required],
    });  
  }

  ionChanger($event){
    this.holidayRequestForm.enable();
    this.motivo = $event.target.value;
  }

  get formControls() { return this.holidayRequestForm.controls; }

  submitHolidayRequest() {
    this.submitted = true;

    if (this.holidayRequestForm.invalid) {
        return;
    }

    const workerID = this.data;
    const motivo = this.motivo;
    const descripcion = this.holidayRequestForm.value.descripcion;
    const fechaI1 = this.holidayRequestForm.value.fechaI;
    const fechaI2 = format(new Date(fechaI1), "d-M-yyyy");
    const fechaF1 = this.holidayRequestForm.value.fechaF;
    const fechaF2 = format(new Date(fechaF1), "d-M-yyyy");
    

    let request = {'workerID': workerID,'motivo': motivo, 'descripcion': descripcion, 'fechaI': fechaI2, 'fechaF': fechaF2};

    console.log(this.data);

    this.userService.holidayRequest(request).pipe(first()).subscribe(() => {
                  this.router.navigate(['/calendar/'+ this.data]);
              });
  }

}
