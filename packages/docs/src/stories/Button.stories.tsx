import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@enline-ui/react'
import { Gauge, CaretLeft } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    children: {
      control: { type: null },
    },
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'primaryLeftBar',
        'secondaryLeftBar',
        'rounded',
      ],
      description: 'Todas as variantes do Botão na aplicação',
      control: {
        type: 'inline-radio',
      },
      table: {
        category: 'Variants',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const PrimaryLeftBar: StoryObj<ButtonProps> = {
  args: {
    variant: 'primaryLeftBar',
    as: 'li',
  },
}

export const PrimaryLeftBarWithIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'primaryLeftBar',
    as: 'li',
    children: (
      <>
        <Gauge weight="bold" />
        Cockpit
      </>
    ),
  },
}

export const SecondaryLeftBar: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondaryLeftBar',
    as: 'li',
  },
}

export const Rounded: StoryObj<ButtonProps> = {
  args: {
    variant: 'rounded',
    children: (
      <>
        <CaretLeft weight="bold" />
        back
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
