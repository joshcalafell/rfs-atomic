import type { Meta, StoryObj } from '@storybook/angular'
import { HeaderComponent } from './header.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { IPerson, mockPerson } from './IPerson'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { mockDesktopMenuItems } from 'libs/desktop-menu/src/lib/desktop-menu/IDesktopMenuItem.mock.ts'

const meta: Meta<HeaderComponent> = {
	component: HeaderComponent,
	title: 'HeaderComponent',
}

export default meta
type Story = StoryObj<HeaderComponent>

export const Primary: Story = {
	args: {
		title: 'INVENTORY',
		user: <IPerson>mockPerson,
		menuItems: mockDesktopMenuItems,
	},
}

export const Heading: Story = {
	args: {
		title: 'INVENTORY',
		user: <IPerson>mockPerson,
		menuItems: mockDesktopMenuItems,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Dashboard/gi)).toBeTruthy()
	},
}

export const WithUser: Story = {
	args: {
		title: 'INVENTORY',
		user: mockPerson,
		menuItems: mockDesktopMenuItems,
	},
}
