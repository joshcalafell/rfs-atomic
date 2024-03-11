import type { Meta, StoryObj } from '@storybook/angular'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import {
	DescriptionListComponent,
	IDescriptionListItem,
} from './description-list.component'

const testItems: IDescriptionListItem[] = [
	{
		label: 'Name',
		value: 'Ada Lovalace',
		valueType: 'text',
	},
	{
		label: 'Email',
		value: 'aloveless@something.com',
		valueType: 'email',
	},
	{
		label: 'Phone',
		value: '123-456-7890',
		valueType: 'phone',
	},
	{
		label: 'Address',
		value: '1234 Elm St',
		valueType: 'addressFormat',
	},
	{
		label: 'City',
		value: 'Springfield',
		valueType: 'text',
	},
	{
		label: 'State',
		value: 'Oregon',
		valueType: 'text',
	},
	{
		label: 'Zip',
		value: '62704',
		valueType: 'text',
	},
	{
		label: 'Country',
		value: 'USA',
		valueType: 'text',
	},
	{
		label: 'Date of Birth',
		value: '1970/01/01',
		valueType: 'date-custom',
	},
]

const meta: Meta<DescriptionListComponent> = {
	component: DescriptionListComponent,
	title: 'DescriptionListComponent',
}
export default meta
type Story = StoryObj<DescriptionListComponent>

export const Primary: Story = {
	args: { items: testItems },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Name/gi)).toBeTruthy()
		expect(canvas.getByText(/John Doe/gi)).toBeTruthy()
	},
}
