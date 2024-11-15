import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { PoliticasPrivacidadComponent } from './components/politicas-privacidad/politicas-privacidad.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'quienes_somos', component: QuienesSomosComponent },
	{ path: 'politicas_privacidad', component: PoliticasPrivacidadComponent },
	{ path: 'terminos_condiciones', component: TerminosCondicionesComponent },
	{ path: 'contactenos', component: ContactenosComponent },
	{ path: '**', redirectTo: 'home' }, // This will catch any invalid routes and redirect to home page
];
