import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router,
    private route: ActivatedRoute, ) { }


  ngOnInit() {
  }

  addNewEvent() {   
    let end = this.selectedDate;
    let month = end.getMonth();
    month= month +1;
    let year = end.getFullYear();
    let dayNumber = end.getUTCDate(); 
    this.router.navigateByUrl('/tarea/'+ dayNumber +'/'+month+'/'+year);
  }

  onTimeSelected(ev) {
      this.selectedDate = ev.selectedTime;
  }

}

