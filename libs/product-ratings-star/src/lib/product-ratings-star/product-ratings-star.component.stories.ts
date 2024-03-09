import type { Meta, StoryObj } from '@storybook/angular'
import { ProductRatingsStarComponent } from './product-ratings-star.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import * as exp from 'constants'

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
		const { getByTestId } = within(comp.$el)
		const star = getByTestId('star')
		expect(star).toHaveStyle('color: black')
		expect(star).toHaveStyle('font-size: 1.5rem')
	},
}

export const BlackMediumStar: Story = {
	args: {
		star: {
			icon: 'star',
			color: 'black',
			size: 'medium',
		},
	},
	play: async ({ comp }) => {
		const { getByTestId } = within(comp.$el)
		const star = getByTestId('star')
		expect(star).toHaveStyle('color: black')
		expect(star).toHaveStyle('font-size: 1.5rem')
	},
}
