import type { Meta, StoryObj } from '@storybook/angular';
import { HashesComponent } from './hashes.component';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const hashes = [
  'soul',
  'jazz',
  'rock',
  'indie',
  'blues',
  'alternative',
  'pop',
  'electronic',
  'hip-hop',
  'industrial',
  'metal',
  'punk',
  'reggae',
  'rhythm-and-blues',
  'ska',
  'soul',
  'techno',
  'trance',
  'trip-hop',
  'world',
  'ambient',
  'chillout',
  'downtempo',
  'new-age',
  'classical',
  'country',
  'folk',
  'house',
  'rap',
  'dance',
  'hardstyle',
  'dubstep',
  'drum-and-bass',
  'breakbeat',
  'grunge',
  'hard-rock',
  'heavy-metal',
  'progressive-rock',
  'death-metal',
  'black-metal',
  'doom-metal',
  'thrash-metal',
  'power-metal',
  'folk-metal',
  'viking-metal',
  'symphonic-metal',
  'gothic-metal',
  'nu-metal',
];

const meta: Meta<HashesComponent> = {
  component: HashesComponent,
  title: 'HashesComponent',
};
export default meta;
type Story = StoryObj<HashesComponent>;

export const Primary: Story = {
  args: {
    hashes,
    paletteColor: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};

export const Secondary: Story = {
  args: {
    hashes,
    paletteColor: 'secondary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};

export const Tertiary: Story = {
  args: {
    hashes,
    paletteColor: 'tertiary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};

export const Danger: Story = {
  args: {
    hashes,
    paletteColor: 'danger',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};

export const Warning: Story = {
  args: {
    hashes,
    paletteColor: 'warning',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};

export const Success: Story = {
  args: {
    hashes,
    paletteColor: 'success',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};

export const Info: Story = {
  args: {
    hashes,
    paletteColor: 'info',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};

export const Light: Story = {
  args: {
    hashes,
    paletteColor: 'light',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};

export const Dark: Story = {
  args: {
    hashes,
    paletteColor: 'dark',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};

export const Heading: Story = {
  args: {
    hashes,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Alternative/gi)).toBeTruthy();
  },
};
