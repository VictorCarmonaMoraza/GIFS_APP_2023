import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './gifs-search-box.component.html',
  styleUrls: ['./gifs-search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput') tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService:GifsService){}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });

    this.gifsService.searchTag(newTag);

    //Limpiamos la caja de texto
    this.tagInput.nativeElement.value = '';
  }

  limpiar():void{
    localStorage.clear();
  }
}
