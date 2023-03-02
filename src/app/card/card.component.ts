import { Component } from '@angular/core';
import { district } from 'src/assets/data'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  collection = district;


}
