import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
})
export class AppComponent {
	title = 'EliteHub';

	constructor(private router: Router) {}

	ngAfterViewInit(): void {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				initFlowbite();
			}
		});
	}
}
