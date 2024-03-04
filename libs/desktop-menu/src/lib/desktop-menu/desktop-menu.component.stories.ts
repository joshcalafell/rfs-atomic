import type { Meta, StoryObj } from '@storybook/angular';
import { DesktopMenuComponent } from './desktop-menu.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DesktopMenuComponent> = {
  component: DesktopMenuComponent,
  title: 'DesktopMenuComponent',
};
export default meta;
type Story = StoryObj<DesktopMenuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/desktop-menu works!/gi)).toBeTruthy();
  },
};
