import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { first } from 'rxjs/operators';
import { format } from "date-fns";

@Component({
  selector: 'app-job-clock',
  templateUrl: './job-clock.page.html',
  styleUrls: ['./job-clock.page.scss'],
})
export class JobClockPage implements OnInit {

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) {
    }

  ngOnInit() {


  }


}
