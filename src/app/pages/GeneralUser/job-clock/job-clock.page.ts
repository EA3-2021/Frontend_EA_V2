import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { first } from 'rxjs/operators';
import { format } from "date-fns";
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-job-clock',
  templateUrl: './job-clock.page.html',
  styleUrls: ['./job-clock.page.scss'],
})
export class JobClockPage implements OnInit {

  codeForm: FormGroup;
  submitted = false;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private alertController: AlertController,
    public menu: MenuController,public formBuilder: FormBuilder) {
       this.data = this.route.snapshot.paramMap.get('workerID');

    }

  ngOnInit() {
    this.codeForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(12)]],
    });

    this.menu1();
  }

  menu1() {
    this.menu.enable(true, 'menu1');
  }

  obtainID(){
    localStorage.setItem('workerID', this.data);
  }

  clockIn(){
        this.userService.clockIn(this.data).pipe(first()).subscribe(() => {
                  this.router.navigate(['/user-desk/'+ this.data]);
              });
  }
  clockOut(){
        this.userService.clockOut(this.data).pipe(first()).subscribe(() => {
                  this.router.navigate(['/user-desk/'+ this.data]);
              });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Incorrect code, try again!',
      buttons: ['OK']
    });

    await alert.present();
  }


  submitLicense(): void {

    this.submitted = true;

    if(this.codeForm.invalid){
      return;
    }

    const code = this.codeForm.value.code;

    /*this.userService.useLicense(code)
      .subscribe(() => {
        
        this.submitted = false;
        this.router.navigateByUrl('/user-desk/' + this.data)

    },
    error => {
        this.alertService.error(error);
        this.presentAlert();
    });*/
  }


}
