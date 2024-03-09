import type { Meta, StoryObj } from '@storybook/angular'
import { ProductRatingsStarComponent } from './product-ratings-star.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<ProductRatingsStarComponent> = {
	component: ProductRatingsStarComponent,
	title: 'ProductRatingsStarComponent',
}
export default meta
type Story = StoryObj<ProductRatingsStarComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/product-ratings-star works!/gi)).toBeTruthy()
	},
}
