import type { Meta, StoryObj } from '@storybook/angular';
import { ProductRatingsComponent } from './product-ratings.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductRatingsComponent> = {
  component: ProductRatingsComponent,
  title: 'ProductRatingsComponent',
};
export default meta;
type Story = StoryObj<ProductRatingsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/product-ratings works!/gi)).toBeTruthy();
  },
};
