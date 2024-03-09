import type { Meta, StoryObj } from '@storybook/angular'
import { ProductRatingsComponent } from './product-ratings.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const buttons = [
	{
		label: 'Cart',
		palleteColor: 'primary',
		size: 'medium',
		disabled: false,
	},
	{
		label: 'Wishlist',
		palleteColor: 'secondary',
		size: 'medium',
		disabled: false,
	},
]

const meta: Meta<ProductRatingsComponent> = {
	component: ProductRatingsComponent,
	title: 'ProductRatingsComponent',
}
export default meta
type Story = StoryObj<ProductRatingsComponent>

export const Primary: Story = {
	args: {
		stars: [
			{
				icon: 'star',
				color: 'black',
				size: 'medium',
			},
		],
		product: {
			entity: {
				id: '2',
				name: 'Cinnamon & Clove',
				description: 'A warm, spicy scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C2',
			},
			buttons,
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
			rating: 2.5,
			reviews: 23,
			stock: 100,
			isOnSale: false,
			saleStart: '',
			saleEnd: '',
			isFeatured: false,
			isTopSeller: false,
			isNew: false,
			isBestSeller: false,
			isSale: false,
			isAvailable: true,
			isOutOfStock: false,
			isComingSoon: false,
			isDiscontinued: false,
			isLimited: false,
			isSoldOut: false,
			isBackOrder: false,
			isPreOrder: false,
			isGift: false,
			isWishListed: false,
			cartQty: 1,
			image:
				'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cinnamon-clove-candle.jpg',

			subscription: {
				type: 'One-Time Purchase',
				isRecurring: true,
				entity: {
					id: '2',
					name: 'Cinnamon & Clove',
					description: 'A warm, spicy scent with a hint of sweetness.',
					price: 24.99,
					sku: 'C2',
				},
			},
		},
	},
}

export const Heading: Story = {
	args: {
		product: {
			entity: {
				id: '2',
				name: 'Cinnamon & Clove',
				description: 'A warm, spicy scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C2',
			},
			buttons,
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
			rating: 2.5,
			reviews: 23,
			stock: 100,
			isOnSale: false,
			saleStart: '',
			saleEnd: '',
			isFeatured: false,
			isTopSeller: false,
			isNew: false,
			isBestSeller: false,
			isSale: false,
			isAvailable: true,
			isOutOfStock: false,
			isComingSoon: false,
			isDiscontinued: false,
			isLimited: false,
			isSoldOut: false,
			isBackOrder: false,
			isPreOrder: false,
			isGift: false,
			isWishListed: false,
			cartQty: 1,
			image:
				'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cinnamon-clove-candle.jpg',

			subscription: {
				type: 'One-Time Purchase',
				isRecurring: true,
				entity: {
					id: '2',
					name: 'Cinnamon & Clove',
					description: 'A warm, spicy scent with a hint of sweetness.',
					price: 24.99,
					sku: 'C2',
				},
			},
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/product-ratings works!/gi)).toBeTruthy()
	},
}
