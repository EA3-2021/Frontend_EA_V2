import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../services/comment.service';
import { Comment } from '../../../model/comment';

@Component({
  selector: 'app-get-comment',
  templateUrl: './get-comment.page.html',
  styleUrls: ['./get-comment.page.scss'],
})
export class GetCommentPage implements OnInit {

  comments: Comment[];
  data:any;
    constructor(
    public commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute,
    ) {this.data = this.route.snapshot.paramMap.get('companyName');}

    ngOnInit(): void {
        this.commentService.getComments().subscribe (comments => {
          this.comments = comments;
        });
    }

}
