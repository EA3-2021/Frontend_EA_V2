import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { Clock } from '../../../model/clock';
import { Code } from '../../../model/code';

@Component({
  selector: 'app-clock-control',
  templateUrl: './clock-control.page.html',
  styleUrls: ['./clock-control.page.scss'],
})
export class ClockControlPage implements OnInit {

  eventSource = [];
  public clockIn: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate = new Date();

  clocks: Clock[];

  codes: Code[];

  data: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService) {
      this.data = this.route.snapshot.paramMap.get('companyName');
    }

  ngOnInit() {
  }



  onTimeSelected(ev) {
      this.selectedDate = ev.selectedTime;
      let end = this.selectedDate;
      let month = end.getMonth();
      month= month +1;
      let year = end.getFullYear();
      let dayNumber = end.getUTCDate();
      let clockIn = (dayNumber+'-'+month+'-'+year);

      console.log(clockIn);

      this.adminService.getClock(clockIn).subscribe(clocks => {
        this.clocks = clocks;
      });

      this.adminService.getCode(this.data, clockIn).subscribe (codes => {
        this.codes = codes;
      });
  }

  generateCode(){
    this.adminService.generateCode(this.data).subscribe (data => {
      window.location.reload();
    });
  }


}
