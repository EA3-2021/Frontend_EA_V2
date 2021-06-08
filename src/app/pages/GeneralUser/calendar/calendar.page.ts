import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router, ActivatedRoute } from '@angular/router';
import {TareaPage} from './../tarea/tarea.page';
>>>>>>> features

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

<<<<<<< HEAD
  date: string;
  type: 'string';

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }
=======
  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate = new Date();

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  numero = 'holiiiii';
  ngOnInit() {
  }

  addNewEvent(numero) {   
    let end = this.selectedDate;
    let dayWeek = end.getDay();
    let month = end.getMonth();
    let year = end.getFullYear();
    let dayNumber = end.getUTCDate();
    let fecha = (dayWeek+','+dayNumber+' '+'de'+' '+month+','+year);

    this.router.navigateByUrl('/tarea');
  }
  onTimeSelected(ev) {
      this.selectedDate = ev.selectedTime;
  }

>>>>>>> features
}
