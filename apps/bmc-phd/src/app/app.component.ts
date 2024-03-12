import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NxWelcomeComponent } from './nx-welcome.component'
import { HeaderComponent } from '@rfs-atomic/header'

export type TScholarRole =
	| 'student'
	| 'faculty'
	| 'staff'
	| 'alumni'
	| 'community'

export type TScholarStatus = 'undergraduate' | 'graduate' | 'postgraduate'

export interface IPerson {
	firstName: string
	lastName: string
	middleName: string
	prefix: string
	suffix: string
	role?: TScholarRole
	status?: TScholarStatus
	areas?: string[]
}

const person = {
	firstName: 'Bernadette',
	lastName: 'Calafell',
	middleName: 'Marie',
	prefix: 'Dr.',
	suffix: 'Ph.D.',
	role: 'faculty',
	status: 'postgraduate',
	areas: [
		'Activism',
		'Art',
		'Chicana/o Studies',
		'Communication Studies',
		'Communication',
		'Critical Theory',
		'Critical',
		'Culture',
		'Digital Media',
		'Feminism',
		'Film',
		'Intercultural',
		'Interpersonal',
		'Latina/o Studies',
		'Literature',
		'Media',
		'Music',
		'Performance Studies',
		'Performance',
		'Pop Culture',
		'Queer Theory',
		'Race',
		'Rhetoric',
		'Social Justice',
		'Television',
		'Theater',
		'Visual Culture',
	],
} as IPerson

const menuItems = [
	{
		label: 'Research',
		path: '/research',
	},
	{
		label: 'Teaching',
		path: '/teaching',
	},
	{
		label: 'Service',
		path: '/service',
	},
	{
		label: 'Books',
		path: '/books',
	},
	{
		label: 'CV',
		path: '/cv',
	},
	{
		label: 'Contact',
		path: '/contact',
	},
]

@Component({
	standalone: true,
	imports: [NxWelcomeComponent, RouterModule, HeaderComponent],
	selector: 'rfs-atomic-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'Bernadette Calafell Ph.D.'
	user: IPerson = person
	menuItems: typeof menuItems = menuItems

	constructor() {
		this.title = 'Bernadette Calafell Ph.D.'
		this.user = person
		this.menuItems = menuItems
	}
}
