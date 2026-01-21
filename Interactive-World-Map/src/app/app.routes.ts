import { Routes } from '@angular/router';
import { SVG } from './svg/svg';

export const routes: Routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'map', component: SVG },
];