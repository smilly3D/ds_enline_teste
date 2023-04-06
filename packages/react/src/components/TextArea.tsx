import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$white',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray700',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$black',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$purple500',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray600',
    opacity: 0.5,
  },
  '&:placeholder': {
    color: '$gray700',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
