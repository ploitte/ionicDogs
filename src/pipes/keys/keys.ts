import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the KeysPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {

  /**
   * Reformate le tableau des chiens correctement
   * @param value
   * @returns {Array}
   */
  transform(value: any) {
    let keys = [];
    for (let key in value) {
      keys = keys.concat({
        name: key,
        hasSub: value[key].length > 0 ? true : false
      });
    }

    return keys;
  }
}
