import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

export type IChipVariant =
	| 'price'
	| 'date'
	| 'label'
	| 'status'
	| 'default'
	| 'stock'

export type TChipSize = 'small' | 'medium' | 'large'
export interface IChip {
	label: string
	color:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'light'
		| 'dark'
		| 'info'
	variant?: IChipVariant
	size: TChipSize
}
@Component({
	selector: 'rfs-atomic-chip',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './chip.component.html',
	styleUrl: './chip.component.scss',
})
export class ChipComponent {
	@Input() label = ''
	@Input() color = 'primary'
	@Input() size = 'medium'

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onClose(event: unknown) {
		// ...
	}
}
