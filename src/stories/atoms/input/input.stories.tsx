import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../../components/atoms/input'

const meta: Meta<typeof Input> = {
  title: 'Components/Atoms/Input',
  component: Input,
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
    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg'],
    },
  },
}

type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    size: 'md',
    placeholder: 'Placeholder',
    full: false,
    error: false,
    disabled: false,
    type: 'text',
  },
}

export const Disabled: Story = {
  args: {
    size: 'md',
    placeholder: 'Placeholder',
    full: false,
    error: false,
    disabled: true,
    type: 'text',
  },
}

export const Error: Story = {
  args: {
    size: 'md',
    placeholder: 'Placeholder',
    full: false,
    error: true,
    disabled: false,
    type: 'text',
  },
}

export default meta
