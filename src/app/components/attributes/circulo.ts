import { Component } from '@angular/core';

@Component({
  selector: '[circulo]',
  standalone: true,
  template: '<ng-content></ng-content>',
  styleUrl: './circulo.scss'
})
export class CirculoComponent {}
