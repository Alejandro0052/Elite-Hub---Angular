import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { QuienesSomosComponent } from './components/pages/quienes-somos/quienes-somos.component';
import { PoliticasPrivacidadComponent } from './components/pages/politicas-privacidad/politicas-privacidad.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { ContactenosComponent } from './components/pages/contactenos/contactenos.component';
import { DeportistasComponent } from './components/pages/deportistas/deportistas.component';
import { PatrocinadoresComponent } from './components/pages/patrocinadores/patrocinadores.component';
import { MarcasComponent } from './components/pages/marcas/marcas.component';
import { NutricionistasComponent } from './components/pages/nutricionistas/nutricionistas.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{
		path: 'quienes_somos',
		component: QuienesSomosComponent,
	},
	{
		path: 'politicas_privacidad',
		component: PoliticasPrivacidadComponent,
	},
	{
		path: 'terminos_condiciones',
		component: TerminosCondicionesComponent,
	},
	{
		path: 'contactenos',
		component: ContactenosComponent,
	},
	{
		path: 'deportistas',
		component: DeportistasComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'patrocinadores',
		component: PatrocinadoresComponent,
		canActivate: [AuthGuard],
	},
	{ path: 'marcas', component: MarcasComponent, canActivate: [AuthGuard] },
	{
		path: 'nutricionistas',
		component: NutricionistasComponent,
		canActivate: [AuthGuard],
	},
	{ path: '**', redirectTo: 'login' },
];
