import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHisttory: string[] = [];
  private apikey: string = 'd6aTZXKv9JX9ipehk2DnkZ2XorK7rxrN';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHisttory];
  }

  private organizeHistory(tag: string): void {
    //Pasamos a minuscula el tag recibido
    tag = tag.toLowerCase();

    /**Si el array de tag incluye el tag que le hemos pasado */
    if (this._tagsHisttory.includes(tag)) {
      //Filtramos para que nos devuelva el array con los elementos que sean distintos del tag
      this._tagsHisttory = this._tagsHisttory.filter((oldTag) => oldTag !== tag)
    }

    //Añadimos al array de tag el ultimo que hemos agregado en la primera posicion
    this._tagsHisttory.unshift(tag);

    //Cortamos para que solo pueda aceptar 10 elementos
    this._tagsHisttory = this._tagsHisttory.splice(0, 10);
  }


  searchTag(tag: string): void {

    //Controlamos que el elemento no este vacio
    if (tag.length === 0) return;
    //LLamamos a la funcion para organizar el array de tag
    this.organizeHistory(tag);

    const parametros = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get(`${this.serviceUrl}/search?`, { params: parametros })
      .subscribe(resp => {
        console.log(resp);
      })

  }
}
