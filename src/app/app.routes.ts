import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DatastructurespageComponent } from './datastructurespage/datastructurespage.component';
import { AlgorithmspageComponent } from './algorithmspage/algorithmspage.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: LandingpageComponent},
    {path: 'ds', component: DatastructurespageComponent},
    {path: 'a', component: AlgorithmspageComponent}
];
