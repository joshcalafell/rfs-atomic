import type { Meta, StoryObj } from '@storybook/angular'
import { ProductRatingsComponent } from './product-ratings.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const product = {
	entity: {
		id: '2',
		name: 'Cinnamon & Clove',
		description: 'A warm, spicy scent.',
		price: 24.99,
		sku: 'C2',
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
	fragrance: 'Cinnamon & Clove',
	size: '3.5" x 3.5" x 3.5"',
	burnTime: '60 hours',
	scent: 'Spicy, Sweet',
	type: 'Candle',
	shape: 'Cylinder',
	wickType: 'Cotton',
	wickMaterial: 'Cotton',
	category: 'Candles',
	subCategory: 'Candle',
	tags: ['Cinnamon', 'Clove', 'Soy Wax', 'Brown', 'Candle'],
	rating: 5,
	reviews: 10,
	stock: 100,
	saleStart: '',
	saleEnd: '',
	cartQty: 1,
	image:
		'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cinnamon-clove-candle.jpg',
	subscription: {
		type: 'One-Time Purchase',
		isRecurring: true,
		entity: {
			id: '2',
			name: 'Cinnamon & Clove',
			description: 'A warm, spicy scent.',
			price: 24.99,
			sku: 'C2',
		},
	},
}

const stars_five = Object.assign({}, product, { rating: 5 })
const stars_four = Object.assign({}, product, { rating: 4 })
const stars_three = Object.assign({}, product, { rating: 3 })
const stars_two = Object.assign({}, product, { rating: 2 })
const stars_one = Object.assign({}, product, { rating: 1 })
const stars_zero = Object.assign({}, product, { rating: 0 })
const stars_five_large_ratings = Object.assign({}, product, {
	rating: 5,
	reviews: 1000,
})

const meta: Meta<ProductRatingsComponent> = {
	component: ProductRatingsComponent,
	title: 'ProductRatingsComponent',
}
export default meta
type Story = StoryObj<ProductRatingsComponent>

export const Primary: Story = {
	args: { product },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/★★★★★/gi)).toBeTruthy()
	},
}

export const ZeroStars: Story = {
	args: { product: stars_zero },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/☆☆☆☆☆/gi)).toBeTruthy()
	},
}

export const OneStars: Story = {
	args: { product: stars_one },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/★☆☆☆☆/gi)).toBeTruthy()
	},
}

export const TwoStars: Story = {
	args: { product: stars_two },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/★★☆☆☆/gi)).toBeTruthy()
	},
}

export const ThreeStars: Story = {
	args: { product: stars_three },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/★★★☆☆/gi)).toBeTruthy()
	},
}

export const FourStars: Story = {
	args: { product: stars_four },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/★★★★☆/gi)).toBeTruthy()
	},
}

export const FiveStars: Story = {
	args: { product: stars_five },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/★★★★★/gi)).toBeTruthy()
	},
}

export const LargeRatingsCount: Story = {
	args: {
		product: stars_five_large_ratings,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/★★★★★/gi)).toBeTruthy()
		expect(canvas.getByText(/★★★★★/gi)).toBeTruthy()
	},
}
