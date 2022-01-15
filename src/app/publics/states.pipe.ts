import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'states'
})
export class StatesPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1: return 'Pendiente';
      case 2: return 'Completada';
      case 3: return 'Rechazada';
                       
    }        
    return null;
  }

}
