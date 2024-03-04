import type { Meta, StoryObj } from '@storybook/angular';
import { ProductCardComponent } from './product-card.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductCardComponent> = {
  component: ProductCardComponent,
  title: 'ProductCardComponent',
};
export default meta;
type Story = StoryObj<ProductCardComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/product-card works!/gi)).toBeTruthy();
  },
};
