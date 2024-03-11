import type { Meta, StoryObj } from '@storybook/angular'
import { ProductDetailComponent } from './product-detail.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { of } from 'rxjs'
import { candleMock } from './product.mock'

const meta: Meta<ProductDetailComponent> = {
	component: ProductDetailComponent,
	title: 'ProductDetailComponent',
}
export default meta
type Story = StoryObj<ProductDetailComponent>

export const Primary: Story = {
	args: { product$: of(candleMock) },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Cedarwood & Vanilla/gi)).toBeTruthy()
	},
}

export const Heading: Story = {
	args: { product$: of(candleMock) },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Cedarwood & Vanilla!/gi)).toBeTruthy()
	},
}
