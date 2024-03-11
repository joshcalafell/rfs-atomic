import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { FooterComponent } from '@rfs-atomic/footer'
import { HeaderComponent } from '@rfs-atomic/header'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonComponent } from 'libs/button/src'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { IPerson } from 'libs/header/src/lib/header/IPerson'
import { NxWelcomeComponent } from './nx-welcome.component'

@Component({
	standalone: true,
	imports: [
		CommonModule,
		ButtonComponent,
		HeaderComponent,
		FooterComponent,
		RouterModule,
		NxWelcomeComponent,
	],

	providers: [
		{
			provide: ActivatedRoute,
			useValue: {
				snapshot: {
					data: { path: 'home' },
				},
			},
		},
	],
	selector: 'rfs-atomic-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'Candle Store'

	menuItems = [
		{
			label: 'About',
			path: '/about',
			paletteColor: 'primary',
		},
		{
			label: 'Products',
			path: '/products',
			paletteColor: 'primary',
		},
		{
			label: 'Wishlist',
			path: '/wishlist',
			paletteColor: 'primary',
		},
		{
			label: 'Orders',
			path: '/orders',
			paletteColor: 'primary',
		},
		{
			label: 'Settings',
			path: '/settings',
			paletteColor: 'primary',
		},
	]

	colorScheme = 'dark'

	user = (<IPerson>{
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
	}) as IPerson

	onButtonClick(event: unknown) {
		console.log('Button clicked', event)
	}
}
