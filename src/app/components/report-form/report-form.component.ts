import { ReportService } from '../../services/report.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Report } from '../../model/report'

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
})
export class ReportFormComponent implements OnInit {

  reportForm: FormGroup;
  isSubmitted = false;

  constructor(
  public reportService: ReportService,
  private router: Router,
  private formBuilder: FormBuilder
  ){ }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      affair: ['', [Validators.required, Validators.nullValidator]],
      description: ['', [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
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
