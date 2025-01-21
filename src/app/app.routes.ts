import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: LandingpageComponent}
];
