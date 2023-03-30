import * as Switch from '@radix-ui/react-switch'
import { styled } from '../../styles'

export const SwitchContainer = styled(Switch.Root, {
  all: 'unset',
  width: 35,
  height: 16,
  backgroundColor: '$gray500',
  borderRadius: '$full',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  position: 'relative',
  border: '2px solid $gray700',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:focus': {
    border: '2px solid $purple500',
  },

  '&[data-state="checked"]': {
    border: '2px solid $purple500',
  },
})
export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 10,
  height: 10,
  backgroundColor: '$gray700',
  borderRadius: '$full',
  boxShadow: '0 2px 2px $black',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(18px)',
    backgroundColor: '$purple500',
  },
})
