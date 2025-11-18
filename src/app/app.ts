import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CMedidorComponent } from './components/ui/c-medidor/c-medidor';
import { TarjetaComponent } from './components/ui/c-tarjeta/c-tarjeta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CMedidorComponent, TarjetaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Interfaces');
}
