import type { Meta, StoryObj } from '@storybook/angular';
import { DescriptionListComponent } from './description-list.component';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const items = [
  { label: 'Name', value: 'John Doe', type: 'text' },
  { label: 'Email', value: 'johndoe@email.com', type: 'email' },
  { label: 'Phone', value: '+1 (303) 674-8856', type: 'phone' },
  { label: 'Country', value: 'United States', type: 'location' },
  { label: 'Date of Birth', value: '01/01/1970', type: 'date' },
  { label: 'Dimensions', value: '3x4x6', type: 'dimensions' },
  { label: 'SKU', value: '#2330009738763', type: 'dimensions' },
  { label: 'Weight', value: '3.5 lbs', type: 'weight' },
];

const meta: Meta<DescriptionListComponent> = {
  component: DescriptionListComponent,
  title: 'DescriptionListComponent',
};
export default meta;
type Story = StoryObj<DescriptionListComponent>;

export const Primary: Story = {
  args: { items },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Name
    expect(canvas.getByText(/Name/gi)).toBeTruthy();
    expect(canvas.getByText(/John Doe/gi)).toBeTruthy();
    // Email
    expect(canvas.getByText(/Email/gi)).toBeTruthy();
    expect(canvas.getByText(/johndoe@email.com/gi)).toBeTruthy();
    // Phone
    expect(canvas.getByText(/Phone/gi)).toBeTruthy();
    expect(canvas.getByText(/\+1 \(303\) 674-8856/gi)).toBeTruthy();
    // Country
    expect(canvas.getByText(/Country/gi)).toBeTruthy();
    expect(canvas.getByText(/United States/gi)).toBeTruthy();
    // DOB
    expect(canvas.getByText(/Date of Birth/gi)).toBeTruthy();
    expect(canvas.getByText(/01\/01\/1970/gi)).toBeTruthy();
    // Dimensions
    expect(canvas.getByText(/Dimensions/gi)).toBeTruthy();
    expect(canvas.getByText(/3x4x6/gi)).toBeTruthy();
    // SKU
    expect(canvas.getByText(/SKU/gi)).toBeTruthy();
    expect(canvas.getByText(/#2330009738763/gi)).toBeTruthy();
    // Weight
    expect(canvas.getByText(/Weight/gi)).toBeTruthy();
    expect(canvas.getByText(/3.5 lbs/gi)).toBeTruthy();
  },
};

export const UserValues: Story = {
  args: { items },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Name
    expect(canvas.getByText(/Name/gi)).toBeTruthy();
    expect(canvas.getByText(/John Doe/gi)).toBeTruthy();
    // Email
    expect(canvas.getByText(/Email/gi)).toBeTruthy();
    expect(canvas.getByText(/johndoe@email.com/gi)).toBeTruthy();
    // Phone
    expect(canvas.getByText(/Phone/gi)).toBeTruthy();
    expect(canvas.getByText(/\+1 \(303\) 674-8856/gi)).toBeTruthy();
    // Country
    expect(canvas.getByText(/Country/gi)).toBeTruthy();
    expect(canvas.getByText(/United States/gi)).toBeTruthy();
    // DOB
    expect(canvas.getByText(/Date of Birth/gi)).toBeTruthy();
    expect(canvas.getByText(/01\/01\/1970/gi)).toBeTruthy();
    // Dimensions
    expect(canvas.getByText(/Dimensions/gi)).toBeTruthy();
    expect(canvas.getByText(/3x4x6/gi)).toBeTruthy();
    // SKU
    expect(canvas.getByText(/SKU/gi)).toBeTruthy();
    expect(canvas.getByText(/#2330009738763/gi)).toBeTruthy();
    // Weight
    expect(canvas.getByText(/Weight/gi)).toBeTruthy();
    expect(canvas.getByText(/3.5 lbs/gi)).toBeTruthy();
  },
};
