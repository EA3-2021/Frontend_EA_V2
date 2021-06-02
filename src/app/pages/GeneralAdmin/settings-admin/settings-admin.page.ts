import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../../services/setting.service';
import { Setting } from '../../../model/setting';

@Component({
  selector: 'app-settings-admin',
  templateUrl: './settings-admin.page.html',
  styleUrls: ['./settings-admin.page.scss'],
})
export class SettingsAdminPage implements OnInit {

  settings: Setting[];

  constructor(
    public settingService: SettingService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.settingService.getSettingsUsers().subscribe (settings => {
        this.settings = settings;
      });
  }

}
