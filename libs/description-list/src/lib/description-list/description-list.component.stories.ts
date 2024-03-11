import type { Meta, StoryObj } from '@storybook/angular'
import { DescriptionListComponent } from './description-list.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const items = [
	{
		label: 'Name',
		value: 'Ada Lovalace',
	},
	{
		label: 'Email',
		value: 'aloveless@something.com',
	},
	{
		label: 'Phone',
		value: '123-456-7890',
	},
	{
		label: 'Address',
		value: '1234 Elm St',
	},
	{
		label: 'City',
		value: 'Springfield',
	},
	{
		label: 'State',
		value: 'Oregon',
	},
	{
		label: 'Zip',
		value: '62704',
	},
	{
		label: 'Country',
		value: 'USA',
	},
	{
		label: 'Date of Birth',
		value: 'Jan 1, 1970',
	},
]

const meta: Meta<DescriptionListComponent> = {
	component: DescriptionListComponent,
	title: 'DescriptionListComponent',
}
export default meta
type Story = StoryObj<DescriptionListComponent>

export const Primary: Story = {
	args: { items },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		expect(canvas.getByText(/Name/gi)).toBeTruthy()
		expect(canvas.getByText(/John Doe/gi)).toBeTruthy()
	},
}
