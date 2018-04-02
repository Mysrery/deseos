import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent{
  constructor( private navController:NavController,
               private _listaDeseos:ListaDeseosService) {  }
  verDetalle(lista){
    let idx = this._listaDeseos.listas.indexOf(lista);
    this.navController.push( DetalleComponent, {lista,idx});
  }
}
