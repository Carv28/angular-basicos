import { Component } from '@angular/core';


@Component ({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html' 

})

export class HeroeComponent {
    nombre: string= 'Ironman';
    edad: number= 45;

    obtenerNombre(): string{
        return ` el heroe ${ this.nombre} tiene una edad de ${this.edad}`;
    }

    get nombreCapitalizado () {
        return this.nombre.toLowerCase();
    }

    cambiarNombre(): void {
        this.nombre= 'Spiderman'
    }
    cambiarEdad(): void {
        this.edad= 20;
    }

}