import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../components/atoms/button'

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          padding: '1rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: {
        type: 'radio',
      },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
  },
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'TEXT',
    disabled: false,
    full: false,
    rounded: 'md',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'TEXT',
    disabled: false,
    full: false,
    rounded: 'md',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'md',
    children: 'TEXT',
    disabled: false,
    full: false,
    rounded: 'md',
  },
}

export const Full: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'TEXT',
    disabled: false,
    rounded: 'md',
    full: true,
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'TEXT',
    disabled: false,
    rounded: 'md',
    full: false,
  },
}

export default meta
