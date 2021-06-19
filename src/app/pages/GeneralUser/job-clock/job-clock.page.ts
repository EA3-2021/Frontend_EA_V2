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
  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) {
       this.data = this.route.snapshot.paramMap.get('workerID');

    }

  ngOnInit() {

  }
  clockIn(){
        this.userService.clockIn(this.data).pipe(first()).subscribe(() => {
                  this.router.navigate(['/user-desk/'+ this.data]);
              });
  }
  clockOut(){
     // this.router.navigateByUrl('/clockOut');
  }


}
