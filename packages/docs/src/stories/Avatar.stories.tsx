import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@enline-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://files-enline-dev.s3.amazonaws.com/company-logo/MMG.png',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

export const SquarePrimary: StoryObj<AvatarProps> = {
  args: {
    containerProps: {
      avatarType: 'square',
    },
  },
}
export const SquareWithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    containerProps: {
      avatarType: 'square',
    },
  },
}
