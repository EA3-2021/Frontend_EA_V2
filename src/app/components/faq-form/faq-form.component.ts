import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaqService } from '../../services/faq.service';

@Component({
  selector: 'app-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.scss'],
})
export class FaqFormComponent implements OnInit {

  faqForm: FormGroup;
  isSubmitted = false;

  constructor(public faqService: FaqService, private router: Router,
              private formBuilder: FormBuilder){ }
  
  ngOnInit(): void {
    this.faqForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.nullValidator]],
      content: ['', [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
    return this.faqForm.controls;
  }

  submitFaq(): void {
    this.isSubmitted = true;
    if(this.faqForm.invalid){
      return;
    }
    
    const title = this.faqForm.value.title;
    const content = this.faqForm.value.content;
  
    let faq = {'title': title, 'content': content};

    this.faqService.newFaq(faq)
      .subscribe(() => {
        this.router.navigateByUrl('/faq');
      });
  }
}
