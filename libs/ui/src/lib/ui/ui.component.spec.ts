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
							data: { path: '/home' },
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

		component.chips = [
			{
				label: 'small',
				color: 'primary',
				size: 'small',
			},
			{
				label: 'medium',
				color: 'primary',
				size: 'medium',
			},
			{
				label: 'large',
				color: 'primary',
				size: 'large',
			},
			{
				label: 'small',
				color: 'secondary',
				size: 'small',
			},
			{
				label: 'medium',
				color: 'secondary',
				size: 'medium',
			},
			{
				label: 'large',
				color: 'secondary',
				size: 'large',
			},
			{
				label: 'small',
				color: 'tertiary',
				size: 'small',
			},
			{
				label: 'medium',
				color: 'tertiary',
				size: 'medium',
			},
			{
				label: 'large',
				color: 'tertiary',
				size: 'large',
			},
			{
				label: 'small',
				color: 'danger',
				size: 'small',
			},
			{
				label: 'medium',
				color: 'danger',
				size: 'medium',
			},
			{
				label: 'large',
				color: 'danger',
				size: 'large',
			},
			{
				label: 'small',
				color: 'warning',
				size: 'small',
			},
			{
				label: 'medium',
				color: 'warning',
				size: 'medium',
			},
			{
				label: 'large',
				color: 'warning',
				size: 'large',
			},
			{
				label: 'small',
				color: 'success',
				size: 'small',
			},
			{
				label: 'medium',
				color: 'success',
				size: 'medium',
			},
			{
				label: 'large',
				color: 'success',
				size: 'large',
			},
			{
				label: 'small',
				color: 'info',
				size: 'small',
			},
			{
				label: 'medium',
				color: 'info',
				size: 'medium',
			},
			{
				label: 'large',
				color: 'info',
				size: 'large',
			},
			{
				label: 'small',
				color: 'light',
				size: 'small',
			},
			{
				label: 'medium',
				color: 'light',
				size: 'medium',
			},
			{
				label: 'large',
				color: 'light',
				size: 'large',
			},
			{
				label: 'small',
				color: 'dark',
				size: 'small',
			},
			{
				label: 'medium',
				color: 'dark',
				size: 'medium',
			},
			{
				label: 'large',
				color: 'dark',
				size: 'large',
			},
		]

		component.menuItems = [
			{
				label: 'Home',
				path: '/home',
			},
			{
				label: 'About',
				path: '/about',
			},
			{
				label: 'Contact',
				path: '/contact',
			},
		]

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
