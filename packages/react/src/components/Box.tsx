import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$white',
  color: '$black',
  boxShadow: '0px 0px 50px #DDE0EC',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
