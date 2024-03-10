import type { Meta, StoryObj } from '@storybook/angular'
import { DescriptionListComponent } from './description-list.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const item: { label: string; value: string | number } = {
	label: 'Name',
	value: 'John Doe',
}

const meta: Meta<DescriptionListComponent> = {
	component: DescriptionListComponent,
	title: 'DescriptionListComponent',
}
export default meta
type Story = StoryObj<DescriptionListComponent>

export const Primary: Story = {
	args: { item },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		// Name
		expect(canvas.getByText(/Name/gi)).toBeTruthy()
		expect(canvas.getByText(/John Doe/gi)).toBeTruthy()
		// Email
	},
}

export const UserValues: Story = {
	args: { item },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		// Name
		expect(canvas.getByText(/Name/gi)).toBeTruthy()
		expect(canvas.getByText(/John Doe/gi)).toBeTruthy()
	},
}
