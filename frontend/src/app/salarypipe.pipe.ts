import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salarypipe',
  standalone: true
})
export class SalarypipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
