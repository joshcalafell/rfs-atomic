import type { Meta, StoryObj } from '@storybook/angular'
import { ProductDescriptionListComponent } from './product-description-list.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<ProductDescriptionListComponent> = {
	component: ProductDescriptionListComponent,
	title: 'ProductDescriptionListComponent',
}
export default meta
type Story = StoryObj<ProductDescriptionListComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/product-description-list works!/gi)).toBeTruthy()
	},
}
