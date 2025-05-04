import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Numbers } from './models/numbers.models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contatore-Laguda';
  numeri: Numbers = new Numbers(0, 0)
}
