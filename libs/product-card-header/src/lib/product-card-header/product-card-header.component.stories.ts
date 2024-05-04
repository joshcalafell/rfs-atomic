import type { Meta, StoryObj } from '@storybook/angular'
import { ProductCardHeaderComponent } from './product-card-header.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
// eslint-disable-next-line @nx/enforce-module-boundaries
export const candleMock = {
	entity: {
		id: '1',
		name: 'Cedarwood & Vanilla',
		description: 'A warm, woody scent.',
		price: 24.99,
		sku: 'C1',
	},
	buttons: [
		{
			label: 'Cart',
			paletteColor: 'primary',
			size: 'medium',
			disabled: false,
		},
		{
			label: 'Wishlist',
			paletteColor: 'secondary',
			size: 'medium',
			disabled: false,
		},
	],
	brand: 'RFS',
	color: 'Brown',
	material: 'Soy Wax',
	dimensions: '3.5" x 3.5" x 3.5"',
	weight: '12 oz',
	fragrance: 'Cedarwood & Vanilla',
	size: '3.5" x 3.5" x 3.5"',
	burnTime: '60 hours',
	scent: 'Woody, Sweet',
	type: 'Candle',
	shape: 'Cylinder',
	wickType: 'Cotton',
	wickMaterial: 'Cotton',
	category: 'Candles',
	subCategory: 'Candle',
	tags: ['Cedarwood', 'Vanilla', 'Soy Wax', 'Brown', 'Candle'],
	rating: 5,
	reviews: 100,
	stock: 100,
	isOnSale: false,
	saleStart: '',
	saleEnd: '',
	cartQty: 1,
	image:
		'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cedarwood-vanilla-candle.jpg',
	subscription: {
		type: 'One-Time Purchase',
		isRecurring: true,
		entity: {
			id: '1',
			name: 'Cedarwood & Vanilla',
			description: 'A warm, woody scent.',
			price: 24.99,
			sku: 'C1',
		},
	},
}

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
