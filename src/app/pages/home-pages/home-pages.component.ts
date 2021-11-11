import { Component, OnInit } from '@angular/core';
import {ImageContainer} from "../../models/image-container";
import * as faker from "faker";

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent implements OnInit {

  firstSectionImages: ImageContainer[]
  secondSectionImages: ImageContainer[]

  constructor() {

    this.firstSectionImages = [
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      })
    ]

    this.secondSectionImages = [
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      }),
      new ImageContainer({
        image: faker.image.imageUrl(128, 128, undefined, true, true),
        description: faker.lorem.sentence(15),
        likes: faker.datatype.number(5)
      })
    ]
  }

  ngOnInit(): void {
  }

}
