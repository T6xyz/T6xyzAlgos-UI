import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DatastructurespageComponent } from './datastructurespage/datastructurespage.component';
import { AlgorithmspageComponent } from './algorithmspage/algorithmspage.component';
import { AboutmepageComponent } from './aboutmepage/aboutmepage.component';
import { LecturedpComponent } from './lecturecomponents/lecturedp/lecturedp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EmailverificationComponent } from './emailverification/emailverification.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: LandingpageComponent},
    {path: 'ds', component: DatastructurespageComponent},
    {path: 'a', component: AlgorithmspageComponent},
    {path: 'about', component: AboutmepageComponent},
    {path: 'dp', component: LecturedpComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'e', component: ErrorpageComponent},
    
];
