import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import '../src/index.css'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#202024' },
      ],
    },
    docs: {
      theme: themes.dark,
    },
  },
}

export default preview
