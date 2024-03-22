import type { Meta, StoryObj } from '@storybook/angular'
import { ProductCardHeaderComponent } from './product-card-header.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { candleMock } from 'libs/product-detail/src/lib/product-detail/product.mock'

const meta: Meta<ProductCardHeaderComponent> = {
	component: ProductCardHeaderComponent,
	title: 'ProductCardHeaderComponent',
}
export default meta
type Story = StoryObj<ProductCardHeaderComponent>

export const Primary: Story = {
	args: {
		product: candleMock,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Cedarwood & Vanilla/gi)).toBeTruthy()
	},
}

export const Heading: Story = {
	args: {
		product: candleMock,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Cedarwood & Vanilla/gi)).toBeTruthy()
	},
}
