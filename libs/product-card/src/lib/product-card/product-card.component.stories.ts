import type { Meta, StoryObj } from '@storybook/angular'
import { ProductCardComponent } from './product-card.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<ProductCardComponent> = {
	component: ProductCardComponent,
	title: 'ProductCardComponent',
}
export default meta
type Story = StoryObj<ProductCardComponent>

export const Primary: Story = {
	args: {
		product: {
			entity: {
				id: '1',
				name: 'Title',
				description: 'A description.',
				price: 1.99,
				sku: 'C1',
			},
			buttons: [
				{
					label: 'Cart',
					paletteColor: 'primary',
					disabled: false,
					size: 'medium',
				},
				{
					label: 'Wishlist',
					paletteColor: 'secondary',
					disabled: false,
					size: 'medium',
				},
			],
			brand: 'Value',
			color: 'Value',
			material: 'Value',
			dimensions: 'Value',
			weight: 'Value',
			fragrance: 'Value',
			size: 'Value',
			burnTime: 'Value',
			scent: 'Value',
			type: 'Value',
			shape: 'Value',
			wickType: 'Value',
			wickMaterial: 'Value',
			category: 'Value',
			subCategory: 'Value',
			tags: ['Tag', 'Tag', 'Tag', 'Tag', 'Tag'],
			rating: 5,
			reviews: 100,
			stock: 100,
			isOnSale: false,
			saleStart: '',
			saleEnd: '',

			cartQty: 1,
			image: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
			subscription: {
				type: 'One-Time Purchase',
				isRecurring: true,
				entity: {
					id: '1',
					name: 'Title',
					description: 'A description...',
					price: 24.99,
					sku: '1234',
				},
			},
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas).toBeTruthy()
	},
}

export const ProductCard: Story = {
	args: {
		product: {
			entity: {
				id: '1',
				name: 'Cedarwood & Vanilla',
				description: 'A warm, woody scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C1',
			},
			buttons: [
				{
					label: 'Cart',
					paletteColor: 'primary',
					disabled: false,
					size: 'medium',
				},
				{
					label: 'Wishlist',
					paletteColor: 'secondary',
					disabled: false,
					size: 'medium',
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
			rating: 4.5,
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
					description: 'A warm, woody scent with a hint of sweetness.',
					price: 24.99,
					sku: 'C1',
				},
			},
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas).toBeTruthy()
	},
}

export const ProductCardSmallButtons: Story = {
	args: {
		product: {
			entity: {
				id: '1',
				name: 'Cedarwood & Vanilla',
				description: 'A warm, woody scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C1',
			},
			buttons: [
				{
					label: 'Cart',
					paletteColor: 'primary',
					disabled: false,
					size: 'small',
				},
				{
					label: 'Wishlist',
					paletteColor: 'secondary',
					disabled: false,
					size: 'small',
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
			rating: 4.5,
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
					description: 'A warm, woody scent with a hint of sweetness.',
					price: 24.99,
					sku: 'C1',
				},
			},
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas).toBeTruthy()
	},
}
