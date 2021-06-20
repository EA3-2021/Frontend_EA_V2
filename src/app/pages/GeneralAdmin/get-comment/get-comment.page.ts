import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../services/comment.service';
import { Comment } from '../../../model/comment';
import { MenuController } from '@ionic/angular';

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
    public menu: MenuController) {this.data = this.route.snapshot.paramMap.get('companyName');}

    ngOnInit(): void {
        this.commentService.getCommentsAdmin(this.data).subscribe (comments => {
          this.comments = comments;
        });

        this.menu2();
    }

    menu2() {
      this.menu.enable(true, 'menu2');
    }
  
    obtainCompany(){
      localStorage.setItem('companyName', this.data);
    }

    resolveComment(id:string){
      this.commentService.resolveComment(id).subscribe (data => {
        window.location.reload();
      });
    }

}
