import { Component, OnInit } from '@angular/core';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: any[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.commentService.comments;
  }

}
