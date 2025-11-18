import { Component } from '@angular/core';
import { CMedidorComponent } from './components/ui/c-medidor/c-medidor';
import { TarjetaComponent } from './components/ui/c-tarjeta/c-tarjeta';
import { CirculoComponent } from './components/attributes/circulo';

interface PopularService {
  rank: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CMedidorComponent, TarjetaComponent, CirculoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly popularServices: PopularService[] = [
    { rank: 1, name: 'Google' },
    { rank: 2, name: 'Facebook' },
    { rank: 3, name: 'Microsoft' },
    { rank: 4, name: 'Apple' },
    { rank: 5, name: 'Instagram' },
    { rank: 6, name: 'AWS' },
    { rank: 7, name: 'WhatsApp' },
    { rank: 8, name: 'Amazon' },
    { rank: 9, name: 'YouTube' },
    { rank: 10, name: 'TikTok' },
  ];
}
