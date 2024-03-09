import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent, IAtomicUiButton } from '@rfs-atomic/button'

@Component({
	selector: 'rfs-atomic-button-row',
	standalone: true,
	imports: [CommonModule, ButtonComponent],
	templateUrl: './button-row.component.html',
	styleUrl: './button-row.component.scss',
})
export class ButtonRowComponent implements OnInit {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() buttons!: any[]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any

	constructor() {
		console.log('UiButtonRowComponent')
	}

	ngOnInit() {
		console.log('UiButtonRowComponent')
	}
}
