import type { Meta, StoryObj } from '@storybook/angular'
import { AppComponent } from './app.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<AppComponent> = {
	component: AppComponent,
	title: 'AppComponent',
}
export default meta
type Story = StoryObj<AppComponent>

export const Primary: Story = {
	args: {
		title: 'Angular Store',
		menuItems: [
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
		],
		colorScheme: 'light',
		user: {
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
		},
	},
}

export const Heading: Story = {
	args: {
		title: 'Angular Store',
		menuItems: [
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
		],
		colorScheme: 'light',
		user: {
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
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Angular Store/gi)).toBeTruthy()
	},
}
