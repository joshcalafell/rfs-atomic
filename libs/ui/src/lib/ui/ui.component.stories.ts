import type { Meta, StoryObj } from '@storybook/angular'
import { UiComponent } from './ui.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<UiComponent> = {
	component: UiComponent,
	title: 'UiComponent',
}
export default meta
type Story = StoryObj<UiComponent>

export const Primary: Story = {
	args: {
		buttons: [
			{
				label: 'small',
				paletteColor: 'tertiary',
				disabled: false,
				size: 'small',
				type: 'animated-arrow',
			},
			{
				label: 'medium',
				paletteColor: 'tertiary',
				disabled: false,
				size: 'medium',
				type: 'animated-arrow',
			},
			{
				label: 'large',
				paletteColor: 'tertiary',
				disabled: false,
				size: 'large',
				type: 'animated-arrow',
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
		chips: [
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
		],
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
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const buttonLength = canvas.getAllByRole('button').length
		expect(buttonLength).toBe(3)
	},
}

export const SecondaryButtons: Story = {
	args: {
		buttons: [
			{
				label: 'small',
				paletteColor: 'tertiary',
				disabled: false,
				size: 'small',
				type: 'animated-arrow',
			},
			{
				label: 'medium',
				paletteColor: 'tertiary',
				disabled: false,
				size: 'medium',
				type: 'animated-arrow',
			},
			{
				label: 'large',
				paletteColor: 'tertiary',
				disabled: false,
				size: 'large',
				type: 'animated-arrow',
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
		chips: [
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
		],
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
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const buttonLength = canvas.getAllByRole('button').length
		expect(buttonLength).toBe(4)
	},
}

export const TertiaryButtons: Story = {
	args: {
		buttons: [
			{
				label: 'small',
				paletteColor: 'tertiary',
				disabled: false,
				size: 'small',
				type: 'animated-arrow',
			},
			{
				label: 'medium',
				paletteColor: 'tertiary',
				disabled: false,
				size: 'medium',
				type: 'animated-arrow',
			},
			{
				label: 'large',
				paletteColor: 'tertiary',
				disabled: false,
				size: 'large',
				type: 'animated-arrow',
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
		chips: [
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
		],
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
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const buttonLength = canvas.getAllByRole('button').length
		expect(buttonLength).toBe(4)
	},
}
