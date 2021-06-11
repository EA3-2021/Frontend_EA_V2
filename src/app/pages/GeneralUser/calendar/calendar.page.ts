import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Tarea } from '../../../model/tarea';

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
  data:any;

  constructor(private router: Router,
    private route: ActivatedRoute,private userService: UserService ) {
      this.data = this.route.snapshot.paramMap.get('workerID');
   }


  ngOnInit() {
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
  
      this.userService.getTareas(fecha).subscribe(tareas => {
        this.tareas = tareas;
      });
  }

  deleteTarea(titulo:String){
    this.userService.deleteTask(titulo).subscribe(data => {
      window.location.reload();
    });
  }
}

