import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './gifs-search-box.component.html',
  styleUrls: ['./gifs-search-box.component.css']
})
export class SearchBoxComponent {
@ViewChild('txtTagInput') tagInput!:ElementRef<HTMLInputElement>

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag});
  }
}
