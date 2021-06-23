import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Comment } from '../../../model/comment';
import { MenuController } from '@ionic/angular';

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

  comments: Comment[];

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private commentService: CommentService,
      private alertService: AlertService,
      public menu: MenuController) {this.data = this.route.snapshot.paramMap.get('workerID');}

  ngOnInit() {
      this.commentForm = this.formBuilder.group({
          content: ['', Validators.required]
      });

      this.commentService.getComments(this.data).subscribe (comments => {
        this.comments = comments;
      });
      this.menu1();
  }

  menu1() {
    this.menu.enable(true, 'menu1');
  }

  obtainID(){
    localStorage.setItem('workerID', this.data);
  }

  // convenience getter for easy access to form fields
  get formControls() {
  return this.commentForm.controls;
  }

  deleteComment(_id:string){
    this.commentService.deleteComment(_id).subscribe (data => {
      window.location.reload();
    });
  }

  submitComment() {

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.commentForm.invalid) {
        return;
    }

    //const company = this.commentForm.value.company;
    const workerID = this.data;
    const content = this.commentForm.value.content;

    let comment = {'workerID': workerID, 'content': content};

    this.commentService.newComment(comment).subscribe(() => {
        this.router.navigateByUrl('/comment/' + this.data);
        this.comments.push(comment);
    });

  }

}
