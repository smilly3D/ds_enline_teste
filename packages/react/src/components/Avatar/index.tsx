import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

interface AvatarContainerProps {
  avatarType: 'square' | 'rounded' // por exemplo, pode ser qualquer outra prop que você queira adicionar
}

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  containerProps?: AvatarContainerProps
}

export function Avatar(props: AvatarProps) {
  const { containerProps, ...imageProps } = props
  return (
    <AvatarContainer {...containerProps}>
      <AvatarImage {...imageProps} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
