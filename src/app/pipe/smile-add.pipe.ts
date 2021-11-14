import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smileAdd'
})
export class SmileAddPipe implements PipeTransform {

  transform(value: string): string {
    return value+"😀"
  }

}
