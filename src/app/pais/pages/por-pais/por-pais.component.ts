import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino  : string     = "";
  hayError : boolean    = false;
  paises   : Country[]  = [];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){

    this.hayError = false;
    this.termino  = termino;
    console.log(this.termino);
    
    this.paisService.buscarPais(this.termino).subscribe(
        (paises) => {this.paises = paises},
          (error) => {this.hayError = true;this.paises = []}
    );
  }

  sugerencias(){

    this.hayError = false;
    
  }

  ngOnInit(): void {
  }

}