import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeComponent } from './components/pages/home/home.component';
import { MarcasComponent } from './components/pages/marcas/marcas.component';
import { DeportistasComponent } from './components/pages/deportistas/deportistas.component';
import { NutricionistasComponent } from './components/pages/nutricionistas/nutricionistas.component';

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		AppComponent,
		HomeComponent,
		MarcasComponent,
		DeportistasComponent,
		NutricionistasComponent,
	],
	providers: [],
})
export class AppModule {}
