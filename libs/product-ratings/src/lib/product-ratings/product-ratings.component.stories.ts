import type { Meta, StoryObj } from '@storybook/angular'
import { ProductRatingsComponent } from './product-ratings.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<ProductRatingsComponent> = {
	component: ProductRatingsComponent,
	title: 'ProductRatingsComponent',
}
export default meta
type Story = StoryObj<ProductRatingsComponent>

export const Primary: Story = {
	args: {
		product: {
			id: '1',
			name: 'Cedarwood & Vanilla',
			description: 'A warm, woody scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C1',
			rating: 5,
			reviews: 100,
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
		},
	},
}

export const Heading: Story = {
	args: {
		product: {
			id: '1',
			name: 'Cedarwood & Vanilla',
			description: 'A warm, woody scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C1',
			rating: 5,
			reviews: 100,
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
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/product-ratings works!/gi)).toBeTruthy()
	},
}
