import type { Meta, StoryObj } from '@storybook/react'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '../../../components/molecules/hover-card'

const meta: Meta<typeof HoverCard> = {
  title: 'Components/Atoms/HoverCard',
  component: HoverCard,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40vh',
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
}

type Story = StoryObj<typeof HoverCard>

export const Primary: Story = {
  args: {
    triggerText: 'Oque é Atomic Designer?',
    contentText:
      'Atomic Design é uma metodologia desenvolvida em 2013 por Brad Frost, que faz uma analogia com a química ao usar elementos como átomos, moléculas e organismos para criar design systems mais consistentes e padronizados dentro do desenvolvimento de uma interface.',
  },
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger>{args.triggerText}</HoverCardTrigger>
      <HoverCardContent>{args.contentText}</HoverCardContent>
    </HoverCard>
  ),
}

export default meta
