import { Component, Input } from '@angular/core';
import { Numbers } from '../models/numbers.models';
import {CommonModule} from "@angular/common"
@Component({
  selector: 'app-fav',
  imports: [CommonModule],
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.css'
})
export class FavComponent {
  @Input() numeri = new Numbers(0, 0)
  colore: string = "white"
  sup():boolean{
    if(this.colore ==="white")
    {
      this.colore = "yellow"
    }else
    {
      this.colore = "white"
    }
    return false
  }
}
