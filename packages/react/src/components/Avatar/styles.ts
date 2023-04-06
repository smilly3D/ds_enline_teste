import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$7',
  height: '$7',
  overflow: 'hidden',

  variants: {
    avatarType: {
      square: {
        borderRadius: '$sm',
      },
      rounded: {
        width: '$8',
        height: '$8',
        borderRadius: '$full',
      },
    },
  },

  defaultVariants: {
    avatarType: 'rounded',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'fill',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
