import type { Meta, StoryObj } from '@storybook/angular'
import { WishlistComponent } from './wishlist.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<WishlistComponent> = {
	component: WishlistComponent,
	title: 'WishlistComponent',
}
export default meta
type Story = StoryObj<WishlistComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/wishlist works!/gi)).toBeTruthy()
	},
}
