import { ComponentProps, forwardRef, ElementRef } from 'react'

import { Input, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ ...props }: TextInputProps, ref) => {
    const isDisable = props.disabled
    return (
      <TextInputContainer className={isDisable ? 'disabled' : ''}>
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
