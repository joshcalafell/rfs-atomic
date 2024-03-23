import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterModule } from '@angular/router'
import { ButtonRowComponent } from '@rfs-atomic/button-row'

@Component({
	selector: 'rfs-atomic-not-found',
	standalone: true,
	imports: [CommonModule, ButtonRowComponent, RouterModule],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
	@Input() redirectUrl: string = '' as string

	buttons = [
		{
			label: '<- Return',
			color: 'secondary',
			type: 'button',
			size: 'medium',
		},
	]
	constructor(private router: Router) {}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
}
