import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(gender: string): string {
    switch(gender) {
      case 'Male':
        return '♂';
      case 'Female':
        return '♀';
      default:
        return '';
    }
  }

}
