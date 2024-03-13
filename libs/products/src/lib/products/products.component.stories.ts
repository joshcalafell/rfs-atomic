import type { Meta, StoryObj } from '@storybook/angular'
import { ProductsComponent } from './products.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { productsMock } from '../IProduct.mock'

const meta: Meta<ProductsComponent> = {
	component: ProductsComponent,
	title: 'ProductsComponent',
}
export default meta
type Story = StoryObj<ProductsComponent>

export const Primary: Story = {
	args: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		products: [productsMock] as any[],
	},
}

export const Heading: Story = {
	args: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		products: [productsMock] as any[],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/products works!/gi)).toBeTruthy()
	},
}
