import type { Meta, StoryObj } from '@storybook/angular'
import { SettingsComponent } from './settings.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<SettingsComponent> = {
	component: SettingsComponent,
	title: 'SettingsComponent',
}
export default meta
type Story = StoryObj<SettingsComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/settings works!/gi)).toBeTruthy()
	},
}
