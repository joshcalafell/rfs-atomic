import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '@rfs-atomic/button'
import { Router, RouterModule } from '@angular/router'

@Component({
	selector: 'rfs-atomic-not-found',
	standalone: true,
	imports: [CommonModule, ButtonComponent, RouterModule],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
	@Input() redirectUrl!: string

	constructor(private router: Router) {}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onButtonClick() {
		// eslint-disable-next-line no-console
		this.router.navigate([this.redirectUrl])
	}
}
