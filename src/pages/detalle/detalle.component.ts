import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
  idx:number;
  lista:any;

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public _listaDeseos:ListaDeseosService,
    public alertCtrl: AlertController
  ) {
    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");
  }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado = !item.completado;
    let todosMarcados = true;
    for (let item of this.lista.items) {
      if ( !item.completado ) {
        todosMarcados = false;
        break;
      }
    }
    this.lista.terminado = todosMarcados;
    this._listaDeseos.actualizarData();
  }
  borrarItem() {
    let alert = this.alertCtrl.create();
    alert.setTitle('¿Esta seguro de que quiere borrar la lista?');

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this._listaDeseos.eliminarLista( this.idx );
        this.navCtrl.pop();
      }
    });
    alert.present();
  }
}
