import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$white',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray500',

  '&[data-state="checked"]': {
    backgroundColor: '$purple500',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $purple500',
  },

  '&:disabled': {
    opacity: 0.5,
    backgroundColor: '$gray500',
    cursor: 'not-allowed',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
})
