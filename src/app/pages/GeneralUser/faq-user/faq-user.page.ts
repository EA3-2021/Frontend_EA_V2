import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FaqService } from '../../../services/faq.service';
import { Faq } from '../../../model/faq';

@Component({
  selector: 'app-faq-user',
  templateUrl: './faq-user.page.html',
  styleUrls: ['./faq-user.page.scss'],
})
export class FaqUserPage implements OnInit {

  faqs: Faq[];

  constructor(
  public faqService: FaqService,
  private router: Router,
  private route: ActivatedRoute,
  ) {}

  ngOnInit(): void { 
      this.faqService.getFaq().subscribe (faqs => {
        this.faqs = faqs;
      });
  }

}
