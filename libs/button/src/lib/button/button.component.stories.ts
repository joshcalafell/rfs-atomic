import type { Meta, StoryObj } from '@storybook/angular'
import { ButtonComponent } from './button.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const meta: Meta<ButtonComponent> = {
	component: ButtonComponent,
	title: 'ButtonComponent',
}
export default meta
type Story = StoryObj<ButtonComponent>

export const PrimaryAllButtons: Story = {
	args: {
		label: 'Primary',
		paletteColor: 'primary',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--primary')
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--medium')
	},
}

export const PrimaryArrowButtons: Story = {
	args: {
		label: 'Primary',
		paletteColor: 'primary',
		disabled: false,
		size: 'medium',
		type: 'animated-arrow',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--primary')
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--medium')
		expect(canvas.getByText(/Primary/gi)).toHaveClass(
			'ui-button--medium--animated-arrow'
		)
	},
}
/** Small  */
export const PrimarySmall: Story = {
	args: {
		label: 'Primary',
		paletteColor: 'primary',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--primary')
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--small')
	},
}

export const SecodarySmall: Story = {
	args: {
		label: 'Secondary',
		paletteColor: 'secondary',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Secondary/gi)).toBeTruthy()
		expect(canvas.getByText(/Secondary/gi)).toHaveClass('ui-button--secondary')
		expect(canvas.getByText(/Secondary/gi)).toHaveClass('ui-button--small')
	},
}

export const TertiarySmall: Story = {
	args: {
		label: 'Tertiary',
		paletteColor: 'tertiary',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Tertiary/gi)).toBeTruthy()
		expect(canvas.getByText(/Tertiary/gi)).toHaveClass('ui-button--tertiary')
		expect(canvas.getByText(/Tertiary/gi)).toHaveClass('ui-button--small')
	},
}

export const InfoSmall: Story = {
	args: {
		label: 'Info',
		paletteColor: 'info',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Info/gi)).toBeTruthy()
		expect(canvas.getByText(/Info/gi)).toHaveClass('ui-button--info')
		expect(canvas.getByText(/Info/gi)).toHaveClass('ui-button--small')
	},
}

export const DangerSmall: Story = {
	args: {
		label: 'Danger',
		paletteColor: 'info',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Danger/gi)).toBeTruthy()
		expect(canvas.getByText(/Danger/gi)).toHaveClass('ui-button--danger')
		expect(canvas.getByText(/Danger/gi)).toHaveClass('ui-button--small')
	},
}

export const WarningSmall: Story = {
	args: {
		label: 'Warning',
		paletteColor: 'warning',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Warning/gi)).toBeTruthy()
		expect(canvas.getByText(/Warning/gi)).toHaveClass('ui-button--warning')
		expect(canvas.getByText(/Warning/gi)).toHaveClass('ui-button--small')
	},
}

export const SuccessSmall: Story = {
	args: {
		label: 'Success',
		paletteColor: 'success',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Success/gi)).toBeTruthy()
		expect(canvas.getByText(/Success/gi)).toHaveClass('ui-button--success')
		expect(canvas.getByText(/Success/gi)).toHaveClass('ui-button--small')
	},
}

export const LinkSmall: Story = {
	args: {
		label: 'Link',
		paletteColor: 'link',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Link/gi)).toBeTruthy()
		expect(canvas.getByText(/Link/gi)).toHaveClass('ui-button--link')
		expect(canvas.getByText(/Link/gi)).toHaveClass('ui-button--small')
	},
}

export const DarkSmall: Story = {
	args: {
		label: 'Dark',
		paletteColor: 'dark',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Dark/gi)).toBeTruthy()
		expect(canvas.getByText(/Dark/gi)).toHaveClass('ui-button--dark')
		expect(canvas.getByText(/Dark/gi)).toHaveClass('ui-button--small')
	},
}

export const LightSmall: Story = {
	args: {
		label: 'Light',
		paletteColor: 'light',
		disabled: false,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Light/gi)).toBeTruthy()
		expect(canvas.getByText(/Light/gi)).toHaveClass('ui-button--light')
		expect(canvas.getByText(/Light/gi)).toHaveClass('ui-button--small')
	},
}

export const DisabledSmall: Story = {
	args: {
		label: 'Disabled',
		paletteColor: 'primary',
		disabled: true,
		size: 'small',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Disabled/gi)).toBeTruthy()
		expect(canvas.getByText(/Disabled/gi)).toHaveAttribute('disabled')
		expect(canvas.getByText(/Disabled/gi)).toHaveClass('ui-button--disabled')
		expect(canvas.getByText(/Disabled/gi)).toHaveClass('ui-button--small')
	},
}

/* ******* */
/** Medium */
/** ****** */
export const PrimaryMedium: Story = {
	args: {
		label: 'Primary',
		paletteColor: 'primary',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--primary')
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--medium')
	},
}

export const SecodaryMedium: Story = {
	args: {
		label: 'Secondary',
		paletteColor: 'secondary',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Secondary/gi)).toBeTruthy()
		expect(canvas.getByText(/Secondary/gi)).toHaveClass('ui-button--secondary')
		expect(canvas.getByText(/Secondary/gi)).toHaveClass('ui-button--medium')
	},
}

export const TertiaryMedium: Story = {
	args: {
		label: 'Tertiary',
		paletteColor: 'tertiary',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Tertiary/gi)).toBeTruthy()
		expect(canvas.getByText(/Tertiary/gi)).toHaveClass('ui-button--tertiary')
		expect(canvas.getByText(/Tertiary/gi)).toHaveClass('ui-button--medium')
	},
}

export const InfoMedium: Story = {
	args: {
		label: 'Info',
		paletteColor: 'info',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Info/gi)).toBeTruthy()
		expect(canvas.getByText(/Info/gi)).toHaveClass('ui-button--info')
		expect(canvas.getByText(/Info/gi)).toHaveClass('ui-button--medium')
	},
}

export const DangerMedium: Story = {
	args: {
		label: 'Danger',
		paletteColor: 'info',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Danger/gi)).toBeTruthy()
		expect(canvas.getByText(/Danger/gi)).toHaveClass('ui-button--danger')
		expect(canvas.getByText(/Danger/gi)).toHaveClass('ui-button--medium')
	},
}

export const WarningMedium: Story = {
	args: {
		label: 'Warning',
		paletteColor: 'warning',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Warning/gi)).toBeTruthy()
		expect(canvas.getByText(/Warning/gi)).toHaveClass('ui-button--warning')
		expect(canvas.getByText(/Warning/gi)).toHaveClass('ui-button--medium')
	},
}

export const SuccessMedium: Story = {
	args: {
		label: 'Success',
		paletteColor: 'success',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Success/gi)).toBeTruthy()
		expect(canvas.getByText(/Success/gi)).toHaveClass('ui-button--success')
		expect(canvas.getByText(/Success/gi)).toHaveClass('ui-button--medium')
	},
}

export const LinkMedium: Story = {
	args: {
		label: 'Link',
		paletteColor: 'link',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Link/gi)).toBeTruthy()
		expect(canvas.getByText(/Link/gi)).toHaveClass('ui-button--link')
		expect(canvas.getByText(/Link/gi)).toHaveClass('ui-button--medium')
	},
}

export const DarkMedium: Story = {
	args: {
		label: 'Dark',
		paletteColor: 'dark',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Dark/gi)).toBeTruthy()
		expect(canvas.getByText(/Dark/gi)).toHaveClass('ui-button--dark')
		expect(canvas.getByText(/Dark/gi)).toHaveClass('ui-button--medium')
	},
}

export const LightMedium: Story = {
	args: {
		label: 'Light',
		paletteColor: 'light',
		disabled: false,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Light/gi)).toBeTruthy()
		expect(canvas.getByText(/Light/gi)).toHaveClass('ui-button--light')
		expect(canvas.getByText(/Light/gi)).toHaveClass('ui-button--medium')
	},
}

export const DisabledMedium: Story = {
	args: {
		label: 'Disabled',
		paletteColor: 'primary',
		disabled: true,
		size: 'medium',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Disabled/gi)).toBeTruthy()
		expect(canvas.getByText(/Disabled/gi)).toHaveAttribute('disabled')
		expect(canvas.getByText(/Disabled/gi)).toHaveClass('ui-button--disabled')
		expect(canvas.getByText(/Disabled/gi)).toHaveClass('ui-button--medium')
	},
}

/** Large */

export const PrimaryLarge: Story = {
	args: {
		label: 'Primary',
		paletteColor: 'primary',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--primary')
		expect(canvas.getByText(/Primary/gi)).toHaveClass('ui-button--large')
	},
}

export const SecodaryLarge: Story = {
	args: {
		label: 'Secondary',
		paletteColor: 'secondary',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Secondary/gi)).toBeTruthy()
		expect(canvas.getByText(/Secondary/gi)).toHaveClass('ui-button--secondary')
		expect(canvas.getByText(/Secondary/gi)).toHaveClass('ui-button--large')
	},
}

export const TertiaryLarge: Story = {
	args: {
		label: 'Tertiary',
		paletteColor: 'tertiary',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Tertiary/gi)).toBeTruthy()
		expect(canvas.getByText(/Tertiary/gi)).toHaveClass('ui-button--tertiary')
		expect(canvas.getByText(/Tertiary/gi)).toHaveClass('ui-button--large')
	},
}

export const InfoLarge: Story = {
	args: {
		label: 'Info',
		paletteColor: 'info',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Info/gi)).toBeTruthy()
		expect(canvas.getByText(/Info/gi)).toHaveClass('ui-button--info')
		expect(canvas.getByText(/Info/gi)).toHaveClass('ui-button--large')
	},
}

export const DangerLarge: Story = {
	args: {
		label: 'Danger',
		paletteColor: 'info',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Danger/gi)).toBeTruthy()
		expect(canvas.getByText(/Danger/gi)).toHaveClass('ui-button--danger')
		expect(canvas.getByText(/Danger/gi)).toHaveClass('ui-button--large')
	},
}

export const WarningLarge: Story = {
	args: {
		label: 'Warning',
		paletteColor: 'warning',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Warning/gi)).toBeTruthy()
		expect(canvas.getByText(/Warning/gi)).toHaveClass('ui-button--warning')
		expect(canvas.getByText(/Warning/gi)).toHaveClass('ui-button--large')
	},
}

export const SuccessLarge: Story = {
	args: {
		label: 'Success',
		paletteColor: 'success',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Success/gi)).toBeTruthy()
		expect(canvas.getByText(/Success/gi)).toHaveClass('ui-button--success')
		expect(canvas.getByText(/Success/gi)).toHaveClass('ui-button--large')
	},
}

export const LinkLarge: Story = {
	args: {
		label: 'Link',
		paletteColor: 'link',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Link/gi)).toBeTruthy()
		expect(canvas.getByText(/Link/gi)).toHaveClass('ui-button--link')
		expect(canvas.getByText(/Link/gi)).toHaveClass('ui-button--large')
	},
}

export const DarkLarge: Story = {
	args: {
		label: 'Dark',
		paletteColor: 'dark',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Dark/gi)).toBeTruthy()
		expect(canvas.getByText(/Dark/gi)).toHaveClass('ui-button--dark')
		expect(canvas.getByText(/Dark/gi)).toHaveClass('ui-button--large')
	},
}

export const LightLarge: Story = {
	args: {
		label: 'Light',
		paletteColor: 'light',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Light/gi)).toBeTruthy()
		expect(canvas.getByText(/Light/gi)).toHaveClass('ui-button--light')
		expect(canvas.getByText(/Light/gi)).toHaveClass('ui-button--large')
	},
}

export const DisabledLarge: Story = {
	args: {
		label: 'Disabled',
		paletteColor: 'primary',
		disabled: true,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Disabled/gi)).toBeTruthy()
		expect(canvas.getByText(/Disabled/gi)).toHaveAttribute('disabled')
		expect(canvas.getByText(/Disabled/gi)).toHaveClass('ui-button--disabled')
		expect(canvas.getByText(/Disabled/gi)).toHaveClass('ui-button--large')
	},
}

export const Heading: Story = {
	args: {
		label: 'Heading',
		paletteColor: 'primary',
		disabled: false,
		size: 'large',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Heading!/gi)).toBeTruthy()
	},
}
