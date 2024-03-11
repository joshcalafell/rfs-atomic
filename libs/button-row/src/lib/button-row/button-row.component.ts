import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { ButtonComponent, IAtomicUiButton } from '@rfs-atomic/button'

@Component({
	selector: 'rfs-atomic-button-row',
	standalone: true,
	imports: [CommonModule, ButtonComponent],
	templateUrl: './button-row.component.html',
	styleUrl: './button-row.component.scss',
})
export class ButtonRowComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input() buttons!: IAtomicUiButton[] | any[]
}
