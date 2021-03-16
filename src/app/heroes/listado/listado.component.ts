import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['listado.component.css']
})
export class ListadoComponent{

  public heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  public heroeBorrado: string = '';

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';

    console.log(Boolean(''));
  }

}
 