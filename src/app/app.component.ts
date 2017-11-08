import { Component } from '@angular/core';
import {CommentService} from './comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments: any;

  constructor(private commentService: CommentService) {
    this.comments = this.commentService.comments;
  }

  addComment(comment) {
    this.commentService.addComment(comment);
  }

}

