import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../../services/alert.service';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  commentForm: FormGroup;
  submitted = false;
  data:any;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private commentService: CommentService,
      private alertService: AlertService
  ) {this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit() {
      this.commentForm = this.formBuilder.group({
          content: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get formControls() {
  return this.commentForm.controls;
  }

  submitComment() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.commentForm.invalid) {
          return;
      }

      const content = this.commentForm.value.content;
      let comment = {'content': content};

      this.commentService.newComment(comment)
        .subscribe(() => {
          this.router.navigateByUrl('/get-comment');
        });

  }

}
