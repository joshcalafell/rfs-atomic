import type { Meta, StoryObj } from '@storybook/angular'
import { SortTableComponent } from './sort-table.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<SortTableComponent> = {
	component: SortTableComponent,
	title: 'SortTableComponent',
}
export default meta
type Story = StoryObj<SortTableComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/sort-table works!/gi)).toBeTruthy()
	},
}
