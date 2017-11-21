import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the UcfirstPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'ucfirst',
})
export class UcfirstPipe implements PipeTransform {

  /**
   * Rajoute une majuscule à la première lettre
   * @param {string} value
   * @param args
   * @returns {string}
   */
  transform(value: string, ...args) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
