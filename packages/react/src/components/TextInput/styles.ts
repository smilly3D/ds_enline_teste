import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray700',
  display: 'flex',
  alignItems: 'center',

  '&:focus-within': {
    borderColor: '$purple500',
  },
  '&.disabled': {
    color: '&black',
    cursor: 'not-allowed',
    background: '$gray600',
    opacity: 0.5,
  },
})
export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$black',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,

  width: '100%',

  '&::placeholder': {
    color: '$gray700',
  },
  '&:focus': {
    outline: 0,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
})
