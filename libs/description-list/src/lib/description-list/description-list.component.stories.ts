import type { Meta, StoryObj } from '@storybook/angular';
import { DescriptionListComponent } from './description-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DescriptionListComponent> = {
  component: DescriptionListComponent,
  title: 'DescriptionListComponent',
};
export default meta;
type Story = StoryObj<DescriptionListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/description-list works!/gi)).toBeTruthy();
  },
};
