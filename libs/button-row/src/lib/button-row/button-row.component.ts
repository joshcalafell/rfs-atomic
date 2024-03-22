import { CommonModule } from '@angular/common'
import { Component, Input, Output } from '@angular/core'
import { ButtonComponent, IAtomicUiButton } from '@rfs-atomic/button'
import { EventEmitter } from '@angular/core'

@Component({
	selector: 'rfs-atomic-button-row',
	standalone: true,
	imports: [CommonModule, ButtonComponent],
	templateUrl: './button-row.component.html',
	styleUrl: './button-row.component.scss',
})
export class ButtonRowComponent {
	@Output() clickEmitter: EventEmitter<unknown> = new EventEmitter<unknown>()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() buttons!: IAtomicUiButton[] | any[]
}
