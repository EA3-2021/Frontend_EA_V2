import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Tarea } from '../../../model/tarea';
import { Request } from '../../../model/request';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  eventSource = [];
  public fecha: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate = new Date();

  tareas: Tarea[]; 
  requests: Request[]; 
  data:any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    public menu: MenuController) {
      this.data = this.route.snapshot.paramMap.get('workerID');
   }


  ngOnInit() {
    this.menu2();
  }

  menu2() {
    this.menu.enable(true, 'menu2');
  }

  addHolidayRequest() {   
    this.router.navigateByUrl('/holiday-request/'+ this.data);
  }

  onTimeSelected(ev) {
      this.selectedDate = ev.selectedTime;
      let end = this.selectedDate;
      let month = end.getMonth();
      month= month +1;
      let year = end.getFullYear();
      let dayNumber = end.getUTCDate(); 
      let fecha = (dayNumber+'-'+month+'-'+year);
  
      this.userService.getTareas(this.data,fecha).subscribe(tareas => {
        this.tareas = tareas;
      });

      this.userService.getHolidays(this.data,fecha).subscribe(requests => {
        this.requests = requests;
      });
  }
}

