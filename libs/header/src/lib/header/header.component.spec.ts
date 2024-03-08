import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DesktopMenuComponent } from '@rfs-atomic/desktop-menu'
import { HeaderComponent } from './header.component'

import { RouterTestingModule } from '@angular/router/testing'

import { ButtonComponent } from '@rfs-atomic/button'
import { ActivatedRoute } from '@angular/router'

describe('HeaderComponent', () => {
	let component: HeaderComponent
	let fixture: ComponentFixture<HeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				DesktopMenuComponent,
				RouterTestingModule,
				HeaderComponent,
				ButtonComponent,
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							data: {
								menuItems: {
									label: 'Dashboard',
									paletteColor: 'primary',
									path: '/primary',
								},
							},
						},
					},
				},
			],
		}).compileComponents()

		fixture = TestBed.createComponent(HeaderComponent)

		component = fixture.componentInstance

		// title of the header
		component.title = 'INVENTORY'
		// IPeson
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
		// IDesktopMenuItem
		component.menuItems = [
			{
				label: 'Dashboard',
				paletteColor: 'primary',
				path: '/primary',
			},
			{
				label: 'Inventory',
				paletteColor: 'primary',
				path: '/inventory',
			},
			{
				label: 'Orders',
				paletteColor: 'primary',
				path: '/orders',
			},
			{
				label: 'Wishlist',
				paletteColor: 'primary',
				path: '/wishlist',
			},
			{
				label: 'Settings',
				paletteColor: 'primary',
				path: '/settings',
			},
		]
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have links', () => {
		expect(component.menuItems).toBeTruthy()
	})

	it('should have a link to Dashboard', () => {
		const link = component.menuItems.find((l) => l.label === 'Dashboard')
		expect(link).toBeTruthy()
	})

	it('should have a user name', () => {
		expect(component.user.name).toBeTruthy()
	})

	it('should have a user email', () => {
		expect(component.user.contactInfo.email).toBeTruthy()
	})

	it('should have a user first name of "Ada"', () => {
		expect(component.user.name.first).toEqual('Ada')
	})

	it('should have a user middle name of "Mary"', () => {
		expect(component.user.name.middle).toEqual('Mary')
	})

	it('should have a user last name of "Lovelace"', () => {
		expect(component.user.name.last).toEqual('Lovelace')
	})

	it('should have a user suffix of "Esq."', () => {
		expect(component.user.name.suffix).toEqual('Esq.')
	})

	it('should have a user prefix  of "Miss"', () => {
		expect(component.user.name.prefix).toEqual('Miss')
	})

	it('should have a user email of "aloveless@someting.com"', () => {
		expect(component.user.contactInfo.email).toEqual('aloveless@someting.com')
	})

	it('should have a user phone number of "+13334445555"', () => {
		expect(component.user.contactInfo.phoneNumber).toEqual('+13334445555')
	})

	it('should have a user github link', () => {
		expect(component.user.contactInfo.socialMedia.github).toEqual('#')
	})

	it('should have a user linkedIn link', () => {
		expect(component.user.contactInfo.socialMedia.linkedIn).toEqual('#')
	})

	it('should have a user instagram link', () => {
		expect(component.user.contactInfo.socialMedia.instagram).toEqual('#')
	})

	it('should have a user avatar', () => {
		expect(component.user.images.avatar).toBeTruthy()
	})

	it('should have a user cover', () => {
		expect(component.user.images.cover).toBeTruthy()
	})

	it('should have a user avatar image of "https://imgur.com/EYzmAVr.png"', () => {
		expect(component.user.images.avatar).toEqual(
			'https://imgur.com/EYzmAVr.png'
		)
	})

	it('should have a user cover image of "https://imgur.com/cHHHHrh.png"', () => {
		expect(component.user.images.cover).toEqual('https://imgur.com/cHHHHrh.png')
	})

	it('should have a user date of birth', () => {
		expect(component.user.dateOfBirth).toBeTruthy()
	})
})
