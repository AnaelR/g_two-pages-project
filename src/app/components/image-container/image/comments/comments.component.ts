import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment: FormGroup
  comments: []

  constructor() {
    this.comment = new FormGroup({
      comment: new FormControl(null, [Validators.required])
    })
  }

  submitComment(){
    let com =  this.comment.value.comment
    console.log(this.comment.value.comment)
  }

  ngOnInit(): void {
  }

}
