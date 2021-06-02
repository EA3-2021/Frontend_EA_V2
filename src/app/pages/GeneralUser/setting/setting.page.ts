import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { SettingService } from '../../../services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  settingForm: FormGroup;
  isSubmitted = false;

  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private settingService: SettingService
  ) { }

  ngOnInit() {
     this.settingForm = this.formBuilder.group({
          name: ['', Validators.required],
          notifications: ['', Validators.required],
          privacity: ['', Validators.required],
          security: ['', Validators.required],

      });
  }

  // convenience getter for easy access to form fields
  get formControls() {
   return this.settingForm.controls;
   }

  submitSetting(): void {
      this.isSubmitted = true;
      if(this.settingForm.invalid){
        return;
      }

      const name = this.settingForm.value.name;
      const notifications = this.settingForm.value.notifications;
      const privacity = this.settingForm.value.privacity;
      const security = this.settingForm.value.security;



      let setting = {'name': name, 'notifications': notifications, 'privacity': privacity, 'security': security};

      console.log(setting);

      this.settingService.newSettingsUser(setting)
        .subscribe(() => {
          this.router.navigateByUrl('/settings-admin');
        });
    }

}

