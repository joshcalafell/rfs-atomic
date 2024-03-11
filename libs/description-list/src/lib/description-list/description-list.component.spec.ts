import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
	DescriptionListComponent,
	IDescriptionListItem,
} from './description-list.component'

const testItems = [
	{ label: 'Phone', value: '+18003035200', valueType: 'phone' },
	{ label: 'Email', value: 'Something@Somewhere.com', valueType: 'email' },
	{ label: 'Text', value: 'Something...', valueType: 'text' },
	{ label: 'Date Short', value: '1970/01/01', valueType: 'date-short' },
	{ label: 'Date Medium', value: '1970/01/01', valueType: 'date-medium' },
	{ label: 'Date Long', value: '1970/01/01', valueType: 'date-long' },
	{
		label: 'Date Full',
		value: '1970/01/01',
		valueType: 'date-full',
	},
	{ label: 'Date Custom', value: '12/31/2021', valueType: 'date-custom' },
	{ label: 'Currency USD', value: '1234.56', valueType: 'currency-usd' },
	{ label: 'Number', value: '1234', valueType: 'number' },
	{ label: 'Percent', value: '1.234', valueType: 'percent' },
	{ label: 'Address Format', value: '1234 Elm St', valueType: 'addressFormat' },
]

describe('DescriptionListComponent', () => {
	let component: DescriptionListComponent
	let fixture: ComponentFixture<DescriptionListComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DescriptionListComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(DescriptionListComponent)
		component = fixture.componentInstance
		component.items = testItems as IDescriptionListItem[]
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})

describe('DescriptionListComponent', () => {
	let component: DescriptionListComponent
	let fixture: ComponentFixture<DescriptionListComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DescriptionListComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(DescriptionListComponent)
		component = fixture.componentInstance
		component.items = testItems as IDescriptionListItem[]
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
