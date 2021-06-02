import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FaqService } from '../../../services/faq.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Faq } from '../../../model/faq';

@Component({
  selector: 'app-faq-admin',
  templateUrl: './faq-admin.page.html',
  styleUrls: ['./faq-admin.page.scss'],
})
export class FaqAdminPage implements OnInit {

  faqs: Faq[];
  faqForm: FormGroup;
  submitted = false;

  constructor(
  private formBuilder: FormBuilder,
  public faqService: FaqService,
  private router: Router,
  private route: ActivatedRoute,
  ) {}

  ngOnInit(): void { 
      this.faqService.getFaq().subscribe (faqs => {
        this.faqs = faqs;
      });
      this.faqForm = this.formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required]
    });
  }

  deleteFaq(name: string) {
    this.faqService.deleteFaq(name).subscribe (data => {
      window.location.reload();
    });
  }


  updateFaq(_id: string) {
    localStorage.setItem("data", JSON.stringify(_id));
    this.router.navigateByUrl('/update-form') 
  }
  get formControls() { return this.faqForm.controls; }

  submitFaq() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.faqForm.invalid) {
          return;
      }

      this.faqService.newFaq(this.faqForm.value)
          
  }


}
