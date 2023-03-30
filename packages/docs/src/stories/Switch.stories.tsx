import type { StoryObj, Meta } from '@storybook/react'
import { Box, Switch, SwitchProps, Text } from '@enline-ui/react'

export default {
  title: 'Form/Switch',
  component: Switch,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
            alignItems: 'center',
          }}
        >
          {Story()}
          <Text size="sm">Very large label</Text>
        </Box>
      )
    },
  ],
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {}
export const Disable: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
  },
}
