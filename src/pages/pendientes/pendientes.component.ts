import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent{
  constructor( private navController:NavController,
               private _listaDeseos:ListaDeseosService) {  }
  irAgregar(){
    this.navController.push( AgregarComponent );
  }
  verDetalle(lista){
    let idx = this._listaDeseos.listas.indexOf(lista);
    this.navController.push( DetalleComponent, {lista,idx});
  }
}
