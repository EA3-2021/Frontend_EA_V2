import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FaqService } from '../../../services/faq.service';
import { Faq } from '../../../model/faq';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-faq-user',
  templateUrl: './faq-user.page.html',
  styleUrls: ['./faq-user.page.scss'],
})
export class FaqUserPage implements OnInit {

  faqs: Faq[];
  data:any;
  
  constructor(
  public faqService: FaqService,
  private router: Router,
  private route: ActivatedRoute,
  public menu: MenuController) {this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit(): void { 
      this.faqService.getFaq().subscribe (faqs => {
        this.faqs = faqs;
      });

      this.menu1();
  }

  menu1() {
    this.menu.enable(true, 'menu1');
  }

  obtainID(){
    localStorage.setItem('workerID', this.data);
  }

}
