import { Component, Output, EventEmitter, output} from '@angular/core';
import { WorldBank } from '../world-bank';

@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [],
  templateUrl: './svg.html',
  styleUrl: './svg.css',
})
export class SVG {
  countrySelected = output<string>();
  target: any;

  handleCountryClick(event: MouseEvent) {
    this.target = event.target as SVGElement;
    this.countrySelected.emit(this.target.id);
  }
};