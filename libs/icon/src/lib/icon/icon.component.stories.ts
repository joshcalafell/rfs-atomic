import type { Meta, StoryObj } from '@storybook/angular'
import { IconComponent } from './icon.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<IconComponent> = {
	component: IconComponent,
	title: 'IconComponent',
}
export default meta
type Story = StoryObj<IconComponent>

export const Primary: Story = {
	args: {
		icon: {
			icon: 'star',
			color: 'black',
			size: 'medium',
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/product-description-list works!/gi)).toBeTruthy()
	},
}

export const star: Story = {
	args: {
		icon: {
			icon: 'star',
			color: 'black',
			size: 'medium',
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/★/gi)).toBeTruthy()
	},
}

export const EmptyStar: Story = {
	args: {
		icon: {
			icon: 'empty-star',
			color: 'black',
			size: 'medium',
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/☆/gi)).toBeTruthy()
	},
}
