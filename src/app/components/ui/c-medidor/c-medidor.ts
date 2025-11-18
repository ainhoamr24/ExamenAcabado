import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'c-medidor',
  templateUrl: './c-medidor.html',
  styleUrls: ['./c-medidor.scss'],
})
export class CMedidorComponent {
  @Input() title = 'Texto';
  @Input() subtitle = 'texto';
  @Input() variant: 'mobile' | 'bot' | 'layer' | 'internet' | 'http' = 'mobile';
  @Input() leftPercent = 50;
  @Input() rightPercent = 50;

  @HostBinding('class')
  get hostClass() {
    return `c-medidor c-medidor--${this.variant}`;
  }
}
