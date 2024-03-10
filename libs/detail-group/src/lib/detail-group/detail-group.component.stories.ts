import type { Meta, StoryObj } from '@storybook/angular'
import { DetailGroupComponent } from './detail-group.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<DetailGroupComponent> = {
	component: DetailGroupComponent,
	title: 'DetailGroupComponent',
}
export default meta
type Story = StoryObj<DetailGroupComponent>

export const Primary: Story = {
	args: {
		items: [],
	},
}

export const Heading: Story = {
	args: {
		items: [],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/detail-group works!/gi)).toBeTruthy()
	},
}
