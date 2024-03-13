import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

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
export class ChipComponent implements OnInit {
	@Input() label = ''
	@Input() color = 'primary'
	@Input() size = 'medium'

	ngOnInit(): void {
		console.log('ChipComponent', this.label)
	}

	onClose(event: unknown) {
		console.log('Close event', event)
	}
}
