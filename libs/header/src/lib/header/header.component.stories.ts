import type { Meta, StoryObj } from '@storybook/angular'
import { HeaderComponent } from './header.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const meta: Meta<HeaderComponent> = {
	component: HeaderComponent,
	title: 'HeaderComponent',
}

export default meta
type Story = StoryObj<HeaderComponent>

export const Primary: Story = {
	args: {
		title: 'Header',
		menuItems: [
			{
				label: 'Home',
				paletteColor: 'primary',
				path: '/home',
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
		],
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
		expect(canvas.getByText(/Home/gi)).toBeTruthy()
	},
}

export const Heading: Story = {
	args: {
		title: 'Header',
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
		menuItems: [
			{
				label: 'Home',
				paletteColor: 'primary',
				path: '/home',
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
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Home/gi)).toBeTruthy()
	},
}

export const WithUser: Story = {
	args: {
		title: 'Header',
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
		menuItems: [
			{
				label: 'Home',
				paletteColor: 'primary',
				path: '/home',
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
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Home/gi)).toBeTruthy()
	},
}
