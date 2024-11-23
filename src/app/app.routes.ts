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
import { MarcasComponent } from './components/marcas/marcas.component';
import { NutricionistasComponent } from './components/nutricionistas/nutricionistas.component';
import { AuthGuard } from './guards/auth.guard'; // Importa el guard

															
export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Protegida por el guard
  { path: 'login', component: LoginComponent }, // No protegida
  { path: 'register', component: RegisterComponent },
  { path: 'quienes_somos', component: QuienesSomosComponent, canActivate: [AuthGuard] },
  { path: 'politicas_privacidad', component: PoliticasPrivacidadComponent, canActivate: [AuthGuard] },
  { path: 'terminos_condiciones', component: TerminosCondicionesComponent, canActivate: [AuthGuard] },
  { path: 'contactenos', component: ContactenosComponent, canActivate: [AuthGuard] },
  { path: 'deportistas', component: DeportistasComponent, canActivate: [AuthGuard] },
  { path: 'patrocinadores', component: PatrocinadoresComponent, canActivate: [AuthGuard] },
  { path: 'marcas', component: MarcasComponent, canActivate: [AuthGuard] },
  { path: 'nutricionistas', component: NutricionistasComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }, 
];
