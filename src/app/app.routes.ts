import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { PoliticasPrivacidadComponent } from './components/politicas-privacidad/politicas-privacidad.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { DeportistasComponent } from './components/deportistas/deportistas.component';
import { PatrocinadoresComponent } from './components/patrocinadores/patrocinadores.component';


export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'quienes_somos', component: QuienesSomosComponent },
	{ path: 'politicas_privacidad', component: PoliticasPrivacidadComponent },
	{ path: 'terminos_condiciones', component: TerminosCondicionesComponent },
	{ path: 'contactenos', component: ContactenosComponent },
	{ path: 'deportistas', component: DeportistasComponent },	
	{ path: 'patrocinadores', component: PatrocinadoresComponent},
	{ path: '**', redirectTo: 'home' }, 
];
