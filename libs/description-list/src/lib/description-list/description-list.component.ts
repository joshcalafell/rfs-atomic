import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { PhoneNumberPipeModule } from './pipes/phone.pipe.module'
import { EmailFormatterPipeModule } from './pipes/email.pipe.module'
import { AddressFormatPipeModule } from './pipes/address.pipe.module'

export type TValueType =
	| 'phone'
	| 'email'
	| 'text'
	| 'date-short'
	| 'date-medium'
	| 'date-long'
	| 'date-full'
	| 'date-custom'
	| 'currency-usd'
	| 'number'
	| 'percent'
	| 'addressFormat'

export interface IDescriptionListItem {
	label: string
	value: string
	valueType?: TValueType
}

@Component({
	selector: 'rfs-atomic-description-list',
	standalone: true,
	imports: [
		CommonModule,
		PhoneNumberPipeModule,
		EmailFormatterPipeModule,
		AddressFormatPipeModule,
	],
	templateUrl: './description-list.component.html',
	styleUrl: './description-list.component.scss',
})
export class DescriptionListComponent {
	@Input() items: IDescriptionListItem[] = []
}
