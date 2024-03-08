/* eslint-disable @nx/enforce-module-boundaries */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { ButtonComponent } from '@rfs-atomic/button'
import { ChipComponent } from '@rfs-atomic/chip'
import { DescriptionListComponent } from '@rfs-atomic/description-list'
import { HashesComponent } from '@rfs-atomic/hashes'
import { HeaderComponent } from '@rfs-atomic/header'
import { UiComponent } from './ui.component'

describe('UiComponent', () => {
	let component: UiComponent
	let fixture: ComponentFixture<UiComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				UiComponent,
				ButtonComponent,
				HashesComponent,
				DescriptionListComponent,
				ChipComponent,
				HeaderComponent,
				RouterTestingModule,
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: { snapshot: { url: [{ path: '/primary' }] } },
				},
			],
		}).compileComponents()

		fixture = TestBed.createComponent(UiComponent)
		component = fixture.componentInstance
		component.button = {
			label: 'Click me',
			palleteColor: 'primary',
			disabled: false,
			size: 'medium',
			type: 'animated-arrow',
		}
		component.hashes = [
			'rock',
			'pop',
			'jazz',
			'blues',
			'country',
			'folk',
			'classical',
			'hip-hop',
			'rap',
			'reggae',
			'rhythm-and-blues',
			'soul',
			'electronic',
			'dance',
			'house',
			'techno',
		]

		component.user = {
			name: {
				prefix: 'Miss',
				first: 'Ada',
				middle: 'Mary',
				last: 'Lovelace',
				suffix: 'Esq.',
			},
			contactInfo: {
				email: 'aloveless@someting.com',
				phoneNumber: '+13334445555',
				socialMedia: {
					github: '#',
					linkedIn: '#',
					instagram: '#',
				},
			},
			gender: 'Female',
			dateOfBirth: new Date('08/23/1981'),
			images: {
				avatar: 'https://imgur.com/EYzmAVr.png',
				cover: 'https://imgur.com/cHHHHrh.png',
			},
			address: {
				street: '29324 Applewood Blossom Lane',
				city: 'Eugene',
				state: 'Oregon',
				zip: '90210',
				country: 'United States',
			},
		}

		component.menuItems = [
			{
				label: 'Dashboard',
				path: '/primary',
			},
			{
				label: 'Inventory',
				path: '/inventory',
			},
			{
				label: 'Orders',
				path: '/orders',
			},
			{
				label: 'Wishlist',
				path: '/wishlist',
			},
			{
				label: 'Settings',
				path: '/settings',
			},
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
