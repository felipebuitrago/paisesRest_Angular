import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = "https://restcountries.com/v3.1";
  
  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{

    return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`);
    
  }
  
  buscarCapital(termino:string):Observable<Country[]>{

    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`);
    
  }

  buscarPaisPorCodigo(termino:string):Observable<Country>{

    return this.http.get<Country>(`${this.apiUrl}/alpha/${termino}`);
    
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url )
            .pipe(
              tap( console.log )
            )
  }

}
