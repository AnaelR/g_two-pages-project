import {ImageModel} from "./interfaces/image-model";

export class ImageContainer implements ImageModel{
  readonly image: string
  readonly description: string
  readonly likes: number
  constructor(input: Partial<ImageContainer>) {
    this.image = input.image || ''
    this.description = input.description || ''
    this.likes = input.likes || 0
  }
}
