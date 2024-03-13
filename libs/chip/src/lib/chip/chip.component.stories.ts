import type { Meta, StoryObj } from '@storybook/angular'
import { ChipComponent } from './chip.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const meta: Meta<ChipComponent> = {
	component: ChipComponent,
	title: 'ChipComponent',
}
export default meta
type Story = StoryObj<ChipComponent>

export const Primary: Story = {
	args: {
		label: 'Primary',
		color: 'primary',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
	},
}

export const PrimarySmall: Story = {
	args: {
		label: 'Primary',
		color: 'primary',
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
	},
}

export const SecondarySmall: Story = {
	args: {
		label: 'Secondary',
		color: 'secondary',
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Secondary/gi)).toBeTruthy()
	},
}

export const TertiarySmall: Story = {
	args: {
		label: 'Tertiary',
		color: 'tertiary',
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Tertiary/gi)).toBeTruthy()
	},
}

export const DangerSmall: Story = {
	args: {
		label: 'Danger',
		color: 'danger',
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Danger/gi)).toBeTruthy()
	},
}

export const WarningSmall: Story = {
	args: {
		label: 'Warning',
		color: 'warning',
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Warning/gi)).toBeTruthy()
	},
}

export const SuccessSmall: Story = {
	args: {
		label: 'Success',
		color: 'success',
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Success/gi)).toBeTruthy()
	},
}

export const InfoSmall: Story = {
	args: {
		label: 'Info',
		color: 'info',
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Info/gi)).toBeTruthy()
	},
}

export const LightSmall: Story = {
	args: {
		label: 'Light',
		color: 'light',
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Light/gi)).toBeTruthy()
	},
}

export const DarkSmall: Story = {
	args: {
		label: 'Dark',
		color: 'dark',
		size: 'small',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Dark/gi)).toBeTruthy()
	},
}

export const PrimaryMedium: Story = {
	args: {
		label: 'Primary',
		color: 'primary',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
	},
}

export const SecondaryMedium: Story = {
	args: {
		label: 'Secondary',
		color: 'secondary',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Secondary/gi)).toBeTruthy()
	},
}

export const TertiaryMedium: Story = {
	args: {
		label: 'Tertiary',
		color: 'tertiary',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Tertiary/gi)).toBeTruthy()
	},
}

export const DangerMedium: Story = {
	args: {
		label: 'Danger',
		color: 'danger',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Danger/gi)).toBeTruthy()
	},
}

export const WarningMedium: Story = {
	args: {
		label: 'Warning',
		color: 'warning',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Warning/gi)).toBeTruthy()
	},
}

export const SuccessMedium: Story = {
	args: {
		label: 'Success',
		color: 'success',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Success/gi)).toBeTruthy()
	},
}

export const InfoMedium: Story = {
	args: {
		label: 'Info',
		color: 'info',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Info/gi)).toBeTruthy()
	},
}

export const LightMedium: Story = {
	args: {
		label: 'Light',
		color: 'light',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Light/gi)).toBeTruthy()
	},
}

export const DarkMedium: Story = {
	args: {
		label: 'Dark',
		color: 'dark',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Dark/gi)).toBeTruthy()
	},
}

export const PrimaryLarge: Story = {
	args: {
		label: 'Primary',
		color: 'primary',
		size: 'large',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
	},
}

export const SecondaryLarge: Story = {
	args: {
		label: 'Secondary',
		color: 'secondary',
		size: 'large',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Secondary/gi)).toBeTruthy()
	},
}

export const TertiaryLarge: Story = {
	args: {
		label: 'Tertiary',
		color: 'tertiary',
		size: 'large',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Tertiary/gi)).toBeTruthy()
	},
}

export const DangerLarge: Story = {
	args: {
		label: 'Danger',
		color: 'danger',
		size: 'large',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Danger/gi)).toBeTruthy()
	},
}

export const WarningLarge: Story = {
	args: {
		label: 'Warning',
		color: 'warning',
		size: 'large',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Warning/gi)).toBeTruthy()
	},
}

export const SuccessLarge: Story = {
	args: {
		label: 'Success',
		color: 'success',
		size: 'large',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Success/gi)).toBeTruthy()
	},
}

export const InfoLarge: Story = {
	args: {
		label: 'Info',
		color: 'info',
		size: 'large',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Info/gi)).toBeTruthy()
	},
}

export const LightLarge: Story = {
	args: {
		label: 'Light',
		color: 'light',
		size: 'large',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Light/gi)).toBeTruthy()
	},
}

export const DarkLarge: Story = {
	args: {
		label: 'Dark',
		color: 'dark',
		size: 'large',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Dark/gi)).toBeTruthy()
	},
}
