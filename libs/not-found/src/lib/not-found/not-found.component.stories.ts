import type { Meta, StoryObj } from '@storybook/angular'
import { NotFoundComponent } from './not-found.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NotFoundComponent> = {
	component: NotFoundComponent,
	title: 'NotFoundComponent',
}
export default meta
type Story = StoryObj<NotFoundComponent>

export const Primary: Story = {
	args: {
		redirectUrl: '',
	},
}

export const Heading: Story = {
	args: {
		redirectUrl: '',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/not-found works!/gi)).toBeTruthy()
	},
}
