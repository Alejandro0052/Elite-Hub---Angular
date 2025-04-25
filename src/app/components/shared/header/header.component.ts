import { Component, ElementRef, effect, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	isAuthenticated: boolean = false;
	username: string | null = null;
	userDropdownVisible: boolean = false;
	navbarDropdownVisible: boolean = false;

	constructor(
		private elementRef: ElementRef,
		private authService: AuthService,
		private router: Router,
	) {
		effect(() => {
			this.isAuthenticated = this.authService.isAuthenticatedSignal();
			this.username = this.authService.usernameSignal();
		});
	}

	toggleDropdownUser() {
		this.userDropdownVisible = !this.userDropdownVisible;
	}

	closeDropdownUser() {
		this.userDropdownVisible = false;
	}

	toggleDropdownNavbar() {
		this.navbarDropdownVisible = !this.navbarDropdownVisible;
	}

	closeDropdownNavbar() {
		this.navbarDropdownVisible = false;
	}

	// Detecta clics fuera del componente
	@HostListener('document:click', ['$event'])
	clickOutside(event: Event): void {
		if (
			!this.elementRef.nativeElement.contains(event.target) &&
			this.userDropdownVisible
		) {
			this.closeDropdownUser();
		}
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['/login']);
	}
}
