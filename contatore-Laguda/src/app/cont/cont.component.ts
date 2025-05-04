import { Component, Input } from '@angular/core';
import { Numbers } from '../models/numbers.models';

@Component({
  selector: 'app-cont',
  imports: [],
  templateUrl: './cont.component.html',
  styleUrl: './cont.component.css'
})
export class ContComponent {
 @Input() numeri_visualizzare :Numbers = new Numbers(0,0);
}
