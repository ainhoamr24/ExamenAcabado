import { Component, HostBinding, Input } from '@angular/core';

type MedidorVariant = 'mobile' | 'bot' | 'layer' | 'internet' | 'http';

type VariantConfig = {
  title: string;
  subtitle: string;
  leftLabel: string;
  rightLabel: string;
  leftPercent: number;
  rightPercent: number;
};

const VARIANT_CONFIG: Record<MedidorVariant, VariantConfig> = {
  mobile: {
    title: 'Mobile vs Desktop',
    subtitle: 'Mobile devices in HTTP requests distribution.',
    leftLabel: 'Mobile',
    rightLabel: 'Desktop',
    leftPercent: 62.4,
    rightPercent: 37.6,
  },
  bot: {
    title: 'Bots vs Human',
    subtitle: 'Bot (automated) vs. human HTTP requests requests distributor.',
    leftLabel: 'Bots',
    rightLabel: 'Humans',
    leftPercent: 27.9,
    rightPercent: 72.1,
  },
  layer: {
    title: 'Layer 3 & 4 Attacks',
    subtitle: 'DDos Attack Type',
    leftLabel: 'Layer 3',
    rightLabel: 'Layer 4',
    leftPercent: 40.1,
    rightPercent: 59.9,
  },
  internet: {
    title: 'Internet Protocol versions',
    subtitle: 'IPv4 vs IPv6',
    leftLabel: 'IPv4',
    rightLabel: 'IPv6',
    leftPercent: 60.4,
    rightPercent: 39.6,
  },
  http: {
    title: 'HTTP versions',
    subtitle: 'HTTP/1.x vs. HTTP/2',
    leftLabel: 'HTTP/1.1',
    rightLabel: 'HTTP/2+',
    leftPercent: 92.1,
    rightPercent: 7.9,
  },
};

@Component({
  selector: 'c-medidor',
  standalone: true,
  templateUrl: './c-medidor.html',
  styleUrl: './c-medidor.scss'
})
export class CMedidorComponent {
  @Input() variant: MedidorVariant = 'mobile';

  @HostBinding('class')
  get hostClass() {
    return `c-medidor c-medidor--${this.variant}`;
  }

  get config(): VariantConfig {
    return VARIANT_CONFIG[this.variant];
  }
}
