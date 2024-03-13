import type { Meta, StoryObj } from '@storybook/angular'
import { ProductCardHeaderComponent } from './product-card-header.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<ProductCardHeaderComponent> = {
	component: ProductCardHeaderComponent,
	title: 'ProductCardHeaderComponent',
}
export default meta
type Story = StoryObj<ProductCardHeaderComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/product-card-header works!/gi)).toBeTruthy()
	},
}
