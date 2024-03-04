import type { Meta, StoryObj } from '@storybook/angular';
import { DragDropComponent } from './drag-drop.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DragDropComponent> = {
  component: DragDropComponent,
  title: 'DragDropComponent',
};
export default meta;
type Story = StoryObj<DragDropComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/drag-drop works!/gi)).toBeTruthy();
  },
};
