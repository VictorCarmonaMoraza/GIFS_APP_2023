import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHisttory: string[] = [];


  constructor() { }

  get tagsHistory() {
    return [...this._tagsHisttory];
  }

  public searchTag(tag: string):void {
    //Añadop el tag al inicio
    this._tagsHisttory.unshift(tag);

   console.log(this._tagsHisttory);

  }
}
