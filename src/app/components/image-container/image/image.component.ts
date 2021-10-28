import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()singleImage: any

  constructor() { }

  ngOnInit(): void {
  }

  newLike(){
    this.singleImage.likes++
  }

}
