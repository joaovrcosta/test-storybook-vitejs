import type { Meta, StoryObj } from '@storybook/react'
import {
  RadioGroup,
  RadioGroupItem,
} from '../../../components/molecules/radio-group'
import { Label } from '../../../components/atoms/label'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Atoms/RadioGroup',
  component: RadioGroup,
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
    options: {
      control: {
        type: 'object',
      },
      defaultValue: [
        { value: 'option-one', label: 'Option One' },
        { value: 'option-two', label: 'Option Two' },
      ],
      description: 'Options for the radio group',
    },
    defaultValue: {
      control: {
        type: 'radio',
      },
      options: ['option-one', 'option-two'],
      description: 'Default selected value',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disable the radio group',
    },
  },
}

type Story = StoryObj<typeof RadioGroup>

export const Primary: Story = {
  args: {
    options: [
      { value: 'option-one', label: 'Option One' },
      { value: 'option-two', label: 'Option Two' },
    ],
    defaultValue: 'option-one',
  },
  render: (args) => (
    <RadioGroup {...args} defaultValue={args.defaultValue}>
      {args.options.map((option) => (
        <div key={option.value} className="flex items-center space-x-4">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  args: {
    options: [
      { value: 'option-one', label: 'Option One' },
      { value: 'option-two', label: 'Option Two' },
    ],
    defaultValue: 'option-one',
    disabled: true,
  },
  render: (args) => (
    <RadioGroup {...args} defaultValue={args.defaultValue}>
      {args.options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export default meta
