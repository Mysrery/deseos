import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';

@Pipe({
  name: 'terminados',
  pure: false
})
export class TerminadosPipe implements PipeTransform {
  transform(listas:Lista[], estado: boolean = true): Lista[] {
    let nuevaLista:Lista[] = [];
    for (let lista of listas) {
        if (lista.terminado == estado) {
          nuevaLista.push( lista );
        }
    }
    return nuevaLista;
  }
}
