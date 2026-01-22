import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SVG } from './svg/svg';
import { WorldBank } from './world-bank';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SVG],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Interactive-World-Map');
}
