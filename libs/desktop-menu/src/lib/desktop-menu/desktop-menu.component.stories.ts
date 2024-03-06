import type { Meta, StoryObj } from '@storybook/angular'
import { DesktopMenuComponent } from './desktop-menu.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { mockDesktopMenuItems } from './IDesktopMenuItem.mock.ts'

const meta: Meta<DesktopMenuComponent> = {
	component: DesktopMenuComponent,
	title: 'DesktopMenuComponent',
}
export default meta
type Story = StoryObj<DesktopMenuComponent>

export const Primary: Story = {
	args: {
		menuItems: mockDesktopMenuItems,
		isOpen: true,
	},
}

export const Heading: Story = {
	args: {
		menuItems: mockDesktopMenuItems,
		isOpen: true,
	},
}
