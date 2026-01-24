import { Component, signal } from '@angular/core';
import { SVG } from './svg/svg';
import { WorldBank } from './world-bank';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SVG, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Interactive-World-Map');
  countryInfo = signal<any>({
    name: '',
    capitalCity: '',
    region: '',
    incomeLevel: '',
    longitude: '',
    latitude: ''
  });

  constructor(private worldBank: WorldBank) {}

  onCountrySelected(countryCode: any) {
    this.worldBank.getCountryData(countryCode).subscribe((response: any) => {
      if (response) {
        console.log(response);
        this.countryInfo.set({
          name: response.name,
          capitalCity: response.capitalCity,
          region: response.region.value,
          incomeLevel: response.incomeLevel.value,
          longitude: response.longitude,
          latitude: response.latitude
        });
      }
    });
  }
}
