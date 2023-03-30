import { ComponentProps, useState } from 'react'
import {
  SliderContainer,
  SliderThumb,
  SliderTrack,
  SliderRange,
} from './styles'
import { CaretRight, CaretLeft } from 'phosphor-react'

export interface SliderProps extends ComponentProps<typeof SliderContainer> {
  data: any
}
function converterDataHora(dataHora: any) {
  const data = new Date(dataHora)
  const dia = data.getDate().toString().padStart(2, '0')
  const mes = (data.getMonth() + 1).toString().padStart(2, '0')
  const ano = data.getFullYear().toString()
  const hora = data.getHours().toString().padStart(2, '0')
  const minutos = data.getMinutes().toString().padStart(2, '0')
  return `${dia}/${mes}/${ano}, ${hora}:${minutos}`
}

export function Slider(props: SliderProps) {
  const isInverted = props.inverted
  const isData = props.data
  const [handleTooltip, setHandleTooltip] = useState(false)
  const [TooltipValue, setTooltipValue] = useState<any>(isData[0])

  return (
    <SliderContainer
      {...props}
      onMouseEnter={() => setHandleTooltip((props) => !props)}
      onMouseLeave={() => setHandleTooltip((props) => !props)}
      onValueChange={(value) =>
        setTooltipValue(converterDataHora(isData[value]))
      }
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb>
        {isInverted ? (
          <CaretLeft weight="bold" />
        ) : (
          <CaretRight weight="bold" />
        )}
        {handleTooltip ? <span>{TooltipValue}</span> : ''}
      </SliderThumb>
    </SliderContainer>
  )
}
