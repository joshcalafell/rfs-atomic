import type { Meta, StoryObj } from '@storybook/angular';
import { UiComponent } from './ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UiComponent> = {
  component: UiComponent,
  title: 'UiComponent',
};
export default meta;
type Story = StoryObj<UiComponent>;

export const Primary: Story = {
  args: {},
};

export const PrimaryButtons: Story = {
  args: {
    buttons: [
      {
        label: 'small',
        palleteColor: 'primary',
        disabled: false,
        size: 'small',
        type: 'button',
      },
      {
        label: 'medium',
        palleteColor: 'primary',
        disabled: false,
        size: 'medium',
        type: 'button',
      },
      {
        label: 'large',
        palleteColor: 'primary',
        disabled: false,
        size: 'large',
        type: 'button',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonLength = canvas.getAllByRole('button').length;
    expect(buttonLength).toBe(3);
  },
};

export const SecondaryButtons: Story = {
  args: {
    buttons: [
      {
        label: 'small',
        palleteColor: 'secondary',
        disabled: false,
        size: 'small',
        type: 'animated-arrow',
      },
      {
        label: 'medium',
        palleteColor: 'secondary',
        disabled: false,
        size: 'medium',
        type: 'animated-arrow',
      },
      {
        label: 'large',
        palleteColor: 'secondary',
        disabled: false,
        size: 'large',
        type: 'animated-arrow',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonLength = canvas.getAllByRole('button').length;
    expect(buttonLength).toBe(3);
  },
};

export const TertiaryButtons: Story = {
  args: {
    buttons: [
      {
        label: 'small',
        palleteColor: 'tertiary',
        disabled: false,
        size: 'small',
        type: 'animated-arrow',
      },
      {
        label: 'medium',
        palleteColor: 'tertiary',
        disabled: false,
        size: 'medium',
        type: 'animated-arrow',
      },
      {
        label: 'large',
        palleteColor: 'tertiary',
        disabled: false,
        size: 'large',
        type: 'animated-arrow',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonLength = canvas.getAllByRole('button').length;
    expect(buttonLength).toBe(3);
  },
};
