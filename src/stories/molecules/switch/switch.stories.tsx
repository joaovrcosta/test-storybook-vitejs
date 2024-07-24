import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '../../../components/molecules/switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Atoms/Switch',
  component: Switch,
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
    state: {
      control: {
        type: 'radio',
      },
      options: ['checked', 'unchecked'],
    },
  },
}

type Story = StoryObj<typeof Switch>

export const Primary: Story = {
  args: {
    state: 'checked',
    isLabelActive: false,
    labelName: 'Ativar pontos',
  },
}

export const Checked: Story = {
  args: {
    state: 'checked',
    isLabelActive: true,
    labelName: 'Ativar notificações',
  },
}

export const Unchecked: Story = {
  args: {
    state: 'unchecked',
    isLabelActive: true,
    labelName: 'Participar do beta',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    isLabelActive: true,
    labelName: 'Participar do beta',
  },
}

export default meta
