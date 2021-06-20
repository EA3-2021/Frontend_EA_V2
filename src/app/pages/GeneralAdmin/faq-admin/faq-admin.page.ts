import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FaqService } from '../../../services/faq.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Faq } from '../../../model/faq';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-faq-admin',
  templateUrl: './faq-admin.page.html',
  styleUrls: ['./faq-admin.page.scss'],
})
export class FaqAdminPage implements OnInit {

  faqs: Faq[];
  faqForm: FormGroup;
  submitted = false;
  data: any;

  constructor(
  private formBuilder: FormBuilder,
  public faqService: FaqService,
  private router: Router,
  private route: ActivatedRoute,
  public menu: MenuController) {
    this.data = this.route.snapshot.paramMap.get('companyName');
  }

  ngOnInit(): void { 
      this.faqService.getFaq().subscribe (faqs => {
        this.faqs = faqs;
      });
      this.faqForm = this.formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required]
    });

    this.menu2();
  }

  menu2() {
    this.menu.enable(true, 'menu2');
  }

  obtainCompany(){
    localStorage.setItem('companyName', this.data);
  }

  deleteFaq(name: string) {
    this.faqService.deleteFaq(name).subscribe (data => {
      window.location.reload();
    });
  }


  get formControls() { return this.faqForm.controls; }

  submitFaq() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.faqForm.invalid) {
          return;
      }
      const title = this.faqForm.value.title;
      const content = this.faqForm.value.content;
      let faq={'title': title, 'content': content};
      //this.faqService.newFaq(this.faqForm.value)
     // let faq: Faq
      this.faqService.newFaq(faq)
        .subscribe (data => {
          window.location.reload();
        });
          
  }

}
