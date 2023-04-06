import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $color$purple500',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$purple500',
        border: '0',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$blue900',
          border: '1px solid $purple500',
        },

        '&:disabled': {
          color: '$gray700',
          backgroundColor: '$gray500',
        },
      },
      secondary: {
        color: '$white',
        border: '1px solid $purple500',

        '&:not(:disabled):hover': {
          background: '$blue900',
          border: '1px solid $purple500',
        },

        '&:disabled': {
          color: '$gray700',
          border: '1px solid $gray500',
        },
      },
      tertiary: {
        color: '$red300',
        border: '1px solid $red300',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$blue900',
          border: '1px solid $purple500',
        },

        '&:disabled': {
          color: '$gray700',
          border: '1px solid $gray500',
        },
      },
      primaryLeftBar: {
        color: '$gray700',
        background: '$gray100',
        border: '1px solid $gray200',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$purple500',
          border: '0',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondaryLeftBar: {
        color: '$white',
        background: '$purple500',
        border: '0',

        '&:not(:disabled):hover': {
          color: '$purple500',
          background: '$gray100',
          border: '1px solid $gray200',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      rounded: {
        borderRadius: '$full',
        color: '$black',
        border: '1px solid $black',

        '&:not(:disabled):hover': {
          color: '$purple500',
          border: '1px solid $purple500',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
    },

    size: {
      xs: {
        height: 24,
      },
      sm: {
        height: 31,
      },

      md: {
        height: 35,
      },
      lg: {
        height: 47,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
