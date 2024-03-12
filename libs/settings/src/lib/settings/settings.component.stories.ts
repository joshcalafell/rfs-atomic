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
	args: {
		title: 'Settings',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Settings/gi)).toBeTruthy()
	},
}

export const Default: Story = {
	args: { title: 'Settings' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Settings/gi)).toBeTruthy()
	},
}
