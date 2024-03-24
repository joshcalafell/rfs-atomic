import type { Meta, StoryObj } from '@storybook/angular'
import { ProductsComponent } from './products.component'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { candleMock } from './service/candle.mock'

const meta: Meta<ProductsComponent> = {
	component: ProductsComponent,
	title: 'ProductsComponent',
}
export default meta
type Story = StoryObj<ProductsComponent>

export const Primary: Story = {
	args: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		products: [candleMock] as any[],
	},
}

export const Heading: Story = {
	args: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		products: [candleMock] as any[],
	},
}
