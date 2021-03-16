import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }
    mostrarNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        if(this.nombre === 'Ironman'){
            this.nombre = 'Spiderman';
        }else{
            this.nombre = 'Ironman';
        }
    }

    cambiarEdad(): void{
        if(this.edad == 45){
            this.edad = 24;
        }else{
            this.edad = 45;
        }
    }
}