import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Output() commentEvent = new EventEmitter();
  name: string;
  text: string;

  constructor() { }

  ngOnInit() {

  }

  makeComment() {
    if (this.name !== '' && this.text !== '') {
      this.commentEvent.emit({name: this.name, text: this.text});
      this.name = '';
      this.text = '';
    }
  }

}
