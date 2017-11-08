import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input('comment') comment: any;
  showReplyForm = false;

  constructor() { }

  ngOnInit() {
  }

  replyAdded(reply) {
      console.log('reply:', reply);
      this.showReplyForm = false;
      this.comment.replies.unshift({name: reply.name, text: reply.text});
  }

}
