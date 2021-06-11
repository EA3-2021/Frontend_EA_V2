import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { Tarea } from '../../../model/tarea';

@Component({
  selector: 'app-calendar-admin',
  templateUrl: './calendar-admin.page.html',
  styleUrls: ['./calendar-admin.page.scss'],
})
export class CalendarAdminPage implements OnInit {

  eventSource = [];
  public fecha: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate = new Date();

  tareas: Tarea[]; 

  data: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService) { 
      this.data = this.route.snapshot.paramMap.get('companyName');
    }

  ngOnInit() {
  }

  addNewEvent() {   
    this.router.navigateByUrl('/task-by-admin');
  }

  onTimeSelected(ev) {
      this.selectedDate = ev.selectedTime;
      let end = this.selectedDate;
      let month = end.getMonth();
      month= month +1;
      let year = end.getFullYear();
      let dayNumber = end.getUTCDate(); 
      let fecha = (dayNumber+'-'+month+'-'+year);
  
      this.adminService.getTareas(fecha).subscribe(tareas => {
        this.tareas = tareas;
      });
  }

  deleteTarea(titulo:String){
    this.adminService.deleteTask(titulo).subscribe(data => {
      window.location.reload();
    });
  }

}
