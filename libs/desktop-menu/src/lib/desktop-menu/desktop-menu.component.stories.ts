import type { Meta, StoryObj } from '@storybook/angular'
import { DesktopMenuComponent } from './desktop-menu.component'

import { expect } from '@storybook/jest'

const meta: Meta<DesktopMenuComponent> = {
	component: DesktopMenuComponent,
	title: 'DesktopMenuComponent',
}
export default meta
type Story = StoryObj<DesktopMenuComponent>

export const Primary: Story = {
	args: {
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
		expect(canvasElement).toBeTruthy()
	},
}

export const Heading: Story = {
	args: {
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
		expect(canvasElement).toBeTruthy()
	},
}
