import type { Meta, StoryObj } from '@storybook/angular'
import { LinkComponent } from './link.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<LinkComponent> = {
	component: LinkComponent,
	title: 'LinkComponent',
}
export default meta
type Story = StoryObj<LinkComponent>

export const Primary: Story = {
	args: {
		link: {
			label: 'Home',
			path: '/home',
			target: '_blank',
			href: '#',
			color: 'black',
			download: '',
			isActive: false,
			rel: 'noopener noreferrer',
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Label/gi)).toBeTruthy()
	},
}

export const Heading: Story = {
	args: {
		link: {
			label: 'Home',
			path: '/home',
			target: '_blank',
			href: '#',
			color: 'black',
			download: '',
			isActive: false,
			rel: 'noopener noreferrer',
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Label/gi)).toBeTruthy()
	},
}
