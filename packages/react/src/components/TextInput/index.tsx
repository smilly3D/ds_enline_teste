import { ComponentProps } from 'react'

import { Input, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {}

export function TextInput(props: TextInputProps) {
  const isDisable = props.disabled
  return (
    <TextInputContainer className={isDisable ? 'disabled' : ''}>
      <Input {...props} />
    </TextInputContainer>
  )
}
