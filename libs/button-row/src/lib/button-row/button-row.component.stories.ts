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
				palleteColor: 'primary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 2',
				palleteColor: 'secondary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 3',
				palleteColor: 'tertiary',
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
				palleteColor: 'primary',
				size: 'medium',
				disabled: false,
				type: 'animated-arrow',
			},
			{
				label: 'Button 2',
				palleteColor: 'secondary',
				size: 'medium',
				disabled: false,
				type: 'animated-arrow',
			},
			{
				label: 'Button 3',
				palleteColor: 'tertiary',
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
				palleteColor: 'primary',
				size: 'small',
				disabled: false,
			},
			{
				label: 'Button 2',
				palleteColor: 'secondary',
				size: 'small',
				disabled: false,
			},
			{
				label: 'Button 2',
				palleteColor: 'tertiary',
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
				palleteColor: 'primary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 5',
				palleteColor: 'secondary',
				size: 'medium',
				disabled: false,
			},
			{
				label: 'Button 6',
				palleteColor: 'tertiary',
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
				palleteColor: 'primary',
				size: 'large',
				disabled: false,
			},
			{
				label: 'Button 8',
				palleteColor: 'secondary',
				size: 'large',
				disabled: false,
			},
			{
				label: 'Button 9',
				palleteColor: 'tertiary',
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
