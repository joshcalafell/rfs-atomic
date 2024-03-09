/* eslint-disable @nx/enforce-module-boundaries */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ButtonComponent } from '@rfs-atomic/button'
import { ChipComponent } from '@rfs-atomic/chip'
import { DescriptionListComponent } from '@rfs-atomic/description-list'
import { HashesComponent } from '@rfs-atomic/hashes'
import { HeaderComponent } from '@rfs-atomic/header'
import { UiComponent } from './ui.component'
import { IPerson } from 'libs/header/src/lib/header/IPerson'
import { ActivatedRoute } from '@angular/router'

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
					useValue: {
						snapshot: {
							data: { path: '/primary' },
						},
					},
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

		component.user = <IPerson>{
			name: {
				prefix: 'Miss',
				first: 'Ada',
				middle: 'Mary',
				last: 'Lovelace',
				suffix: 'Esq.',
			},
			contactInfo: {
				email: '',
				phoneNumber: '',
				socialMedia: {
					github: '',
					linkedIn: '',
					instagram: '',
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
				paletteColor: 'primary',
				icon: 'dashboard',
				children: [],
			},
			{
				label: 'Inventory',
				path: '/inventory',
				paletteColor: 'primary',
				icon: 'dashboard',
				children: [],
			},
			{
				label: 'Orders',
				path: '/orders',
				paletteColor: 'primary',
				icon: 'dashboard',
				children: [],
			},
			{
				label: 'Wishlist',
				path: '/wishlist',
				paletteColor: 'primary',
				icon: 'dashboard',
				children: [],
			},
			{
				label: 'Settings',
				path: '/settings',
				paletteColor: 'primary',
				icon: 'dashboard',
				children: [],
			},
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
