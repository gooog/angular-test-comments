import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {

  comments = [
      {name: 'გოგიტა მეზურნიშვილი', text: 'ეს არის ჩემი პირველი კომენტარი', replies: [
        { name: 'ვახო', text: 'ეს არის ვახოს საპასუხო კომენტარი' }
        ]
      }
  ];

  constructor() { }

  addComment(comment) {
    this.comments.unshift(Object.assign(comment, {replies: []}));
  }

}
