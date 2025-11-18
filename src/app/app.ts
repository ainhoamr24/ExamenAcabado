import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articles } from './components/pages/articles/articles';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Articles],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Interfaces');
}
