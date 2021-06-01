import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../../services/alert.service';
import { ReportService } from '../../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  reportForm: FormGroup;
  isSubmitted = false;

  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private alertService: AlertService,
  private reportService: ReportService
  ) { }

  ngOnInit() {
     this.reportForm = this.formBuilder.group({
          affair: ['', Validators.required],
          description: ['', Validators.required]
      });

  }

  // convenience getter for easy access to form fields
  get formControls() {
   return this.reportForm.controls;
   }

  submitReport(): void {
      this.isSubmitted = true;
      if(this.reportForm.invalid){
        return;
      }

      const affair = this.reportForm.value.affair;
      const description = this.reportForm.value.description;
      let report = {'affair': affair, 'description': description};

      this.reportService.newReport(report)
        .subscribe(() => {
          this.router.navigateByUrl('/reports');
        });
    }

}

