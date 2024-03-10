import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

export type TValueType =
	| 'phone'
	| 'email'
	| 'link'
	| 'text'
	| 'date'
	| 'time'
	| 'datetime'
	| 'currency'
	| 'dimensions'
	| 'weight'
	| 'number'
	| 'percentage'
	| 'description-list'
	| 'address'
	| 'location'
	| 'coordinates'

export interface IDescriptionListItem {
	label: string
	value: string
	valueType?: TValueType
	icon?: string
	iconColor?: string
}

@Component({
	selector: 'rfs-atomic-description-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './description-list.component.html',
	styleUrl: './description-list.component.scss',
})
export class DescriptionListComponent {
	@Input() items!: IDescriptionListItem[] | any[]
}
