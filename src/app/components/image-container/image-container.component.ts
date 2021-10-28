import {Component, OnInit} from '@angular/core';
import {ImageContainer} from "../../models/image-container";
import * as faker from "faker";

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  imageList: ImageContainer[]

  constructor() {
    this.imageList = [
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.text(50),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.text(50),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.text(50),
        likes: faker.datatype.number(5)
      })
    ]
  }

  newLike(i: number): void {
    console.log(this.imageList);
  }

  ngOnInit(): void {
  }

}
