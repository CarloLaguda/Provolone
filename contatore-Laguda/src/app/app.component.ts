import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Numbers } from './models/numbers.models';
import { ContComponent } from './cont/cont.component';
import { FavComponent } from './fav/fav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContComponent, FavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contatore-Laguda';
  numeri: Numbers = new Numbers(0, 0)
  numeroint: number = 0;

  prefe: Numbers[] = []
  fav():boolean
  {
    this.prefe.push(new Numbers(this.numeri.totale, this.numeri.nClick))
    return false
  }
  piu(numero: HTMLInputElement): boolean
  {
    this.numeroint = Number(numero.value)
    this.numeri.piu(this.numeroint)
    return false
  }

  meno(numero: HTMLInputElement): boolean
  {
    this.numeroint = Number(numero.value)
    this.numeri.meno(this.numeroint)
    return false
  }
}
