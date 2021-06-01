import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from '../../../services/report.service';
import { Report } from '../../../model/report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  reports: Report[];

  constructor(
    public reportService: ReportService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.reportService.getReports().subscribe (reports => {
        this.reports = reports;
      });
  }

}
