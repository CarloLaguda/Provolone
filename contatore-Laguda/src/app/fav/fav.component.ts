import { Component, Input } from '@angular/core';
import { Numbers } from '../models/numbers.models';
@Component({
  selector: 'app-fav',
  imports: [],
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.css'
})
export class FavComponent {
  @Input() numeri = new Numbers(0, 0)
}
