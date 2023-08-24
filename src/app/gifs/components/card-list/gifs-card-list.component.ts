import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './gifs-card-list.component.html',
  styleUrls: ['./gifs-card-list.component.css']
})
export class CardListComponent {

  @Input() public gifs: Gif[]=[];
}
