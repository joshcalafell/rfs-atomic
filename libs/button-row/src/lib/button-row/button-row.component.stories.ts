import type { Meta, StoryObj } from '@storybook/angular'
import { ButtonRowComponent } from './button-row.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<ButtonRowComponent> = {
	component: ButtonRowComponent,
	title: 'ButtonRowComponent',
}
export default meta
type Story = StoryObj<ButtonRowComponent>

export const Primary: Story = {
	args: {
		buttons: [
			{
				label: 'Button 1',
				paletteColor: 'primary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 2',
				paletteColor: 'secondary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 3',
				paletteColor: 'tertiary',
				size: 'medium',
				disabled: false,
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Button 3/gi)).toBeTruthy()
		expect(document.querySelector('.ui-button')).toBeTruthy()
	},
}

export const PrimaryArrows: Story = {
	args: {
		buttons: [
			{
				label: 'Button 1',
				paletteColor: 'primary',
				size: 'medium',
				disabled: false,
				type: 'animated-arrow',
			},
			{
				label: 'Button 2',
				paletteColor: 'secondary',
				size: 'medium',
				disabled: false,
				type: 'animated-arrow',
			},
			{
				label: 'Button 3',
				paletteColor: 'tertiary',
				size: 'medium',
				disabled: false,
				type: 'animated-arrow',
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Button 3/gi)).toBeTruthy()
		expect(document.querySelector('.animated-arrow')).toBeTruthy()
	},
}

export const Small: Story = {
	args: {
		buttons: [
			{
				label: 'Button 1',
				paletteColor: 'primary',
				size: 'small',
				disabled: false,
			},
			{
				label: 'Button 2',
				paletteColor: 'secondary',
				size: 'small',
				disabled: false,
			},
			{
				label: 'Button 2',
				paletteColor: 'tertiary',
				size: 'small',
				disabled: false,
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Button 7/gi)).toBeTruthy()
		expect(document.querySelector('.ui-button')).toBeTruthy()
	},
}

export const Medium: Story = {
	args: {
		buttons: [
			{
				label: 'Button 4',
				paletteColor: 'primary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 5',
				paletteColor: 'secondary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 6',
				paletteColor: 'tertiary',
				size: 'medium',
				disabled: false,
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Button 6/gi)).toBeTruthy()
		expect(document.querySelector('.ui-button')).toBeTruthy()
	},
}

export const Large: Story = {
	args: {
		buttons: [
			{
				label: 'Button 7',
				paletteColor: 'primary',
				size: 'large',
				disabled: false,
			},
			{
				label: 'Button 8',
				paletteColor: 'secondary',
				size: 'large',
				disabled: false,
			},
			{
				label: 'Button 9',
				paletteColor: 'tertiary',
				size: 'large',
				disabled: false,
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Button 9/gi)).toBeTruthy()
		expect(document.querySelector('.ui-button')).toBeTruthy()
	},
}
