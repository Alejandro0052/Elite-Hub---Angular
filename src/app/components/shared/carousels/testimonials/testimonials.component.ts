import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-testimonials',
	standalone: true,
	imports: [NgClass],
	templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
	@Input({ required: true }) items: { image: string; text: string }[] = [];
	@Input() autoPlayInterval: number = 5000;

	currentIndex: number = 0;
	isFading: boolean = false;

	private intervalId: any;
	private isHovered: boolean = false;

	// Iniciar el autoplay cuando el componente se inicializa
	ngOnInit(): void {
		this.startAutoPlay();
	}

	// Detener el autoplay cuando el componente se destruye
	ngOnDestroy(): void {
		this.stopAutoPlay();
	}

	// Configurar el intervalo para avanzar automáticamente
	startAutoPlay(): void {
		this.intervalId = setInterval(() => {
			// Solo avanzar si el mouse no está sobre el carrusel
			if (!this.isHovered && this.items.length > 1) {
				this.next();
			}
		}, this.autoPlayInterval);
	}

	stopAutoPlay(): void {
		// Limpiar el intervalo si existe
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	onMouseEnter(): void {
		// Cuando el mouse entra, detener el autoplay
		this.isHovered = true;
	}

	onMouseLeave(): void {
		// Cuando el mouse sale, reanudar el autoplay
		this.isHovered = false;
	}

	prev(): void {
		if (this.items.length > 0) {
			this.triggerFade(() => {
				// Calcular el índice anterior con un ciclo completo
				this.currentIndex =
					(this.currentIndex - 1 + this.items.length) %
					this.items.length;
			});
		}
	}

	next(): void {
		if (this.items.length > 0) {
			this.triggerFade(() => {
				// Calcular el siguiente índice con un ciclo completo
				this.currentIndex = (this.currentIndex + 1) % this.items.length;
			});
		}
	}

	setSlide(index: number): void {
		// Cambiar a una diapositiva específica solo si es diferente a la actual
		if (index !== this.currentIndex) {
			this.triggerFade(() => {
				this.currentIndex = index;
			});
		}
	}

	private triggerFade(callback: () => void): void {
		// Activar la animación de desvanecido
		this.isFading = true;

		// Después de un tiempo, ejecutar el callback y quitar el desvanecido
		setTimeout(() => {
			callback();
			setTimeout(() => {
				this.isFading = false;
			}, 50); // Pequeño retraso para asegurar una transición suave
		}, 500); // Duración del desvanecido
	}
}
