import type { Meta, StoryObj } from '@storybook/angular'
import { expect } from '@storybook/jest'
import { ProductRatingsStarComponent } from './product-ratings-star.component'

const meta: Meta<ProductRatingsStarComponent> = {
	component: ProductRatingsStarComponent,
	title: 'ProductRatingsStarComponent',
}
export default meta
type Story = StoryObj<ProductRatingsStarComponent>

export const Primary: Story = {
	args: {
		star: {
			icon: 'star',
			color: 'black',
			size: 'medium',
		},
	},
	play: async ({ comp }) => {
		expect(comp).toBeTruthy()
	},
}

export const Empty: Story = {
	args: {
		star: {
			icon: 'empty-star',
			color: 'black',
			size: 'medium',
		},
	},
	play: async ({ comp }) => {
		expect(comp).toBeTruthy()
	},
}
