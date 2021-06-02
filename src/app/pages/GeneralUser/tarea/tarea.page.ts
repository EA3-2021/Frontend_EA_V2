import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {

  registerTareaForm: FormGroup;
  submitted = false;
  d='';
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { 
    }

  ngOnInit() {
    this.registerTareaForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
      hora: ['', Validators.required],
      duracion: ['', Validators.required],
    });
  }

  submitRegisterTarea() {
    //this.submitted = true;
    alert(this.d);
    /*if (this.registerTareaForm.invalid) {
        return;
    }*/

    /*this.adminService.registerAdmin(this.registerAdminForm.value)
          .pipe(first())
          .subscribe(() => {
                  this.router.navigate(['/login-admin']);
              });*/
  }
 
}
