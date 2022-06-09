import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  borrado: any = '';

  borrarHeroe(){

    console.log('borrando ...');
    this.borrado = this.heroes.splice(0,1);
    console.log(this.borrado);
    return this.borrado;
  }


}






