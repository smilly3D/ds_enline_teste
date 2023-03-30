import * as Slider from '@radix-ui/react-slider'
import { styled } from '../../styles'

export const SliderContainer = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',
  height: 20,
})
export const SliderTrack = styled(Slider.Track, {
  backgroundColor: '$gray600',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: 3,
})
export const SliderRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: '$purple500',
  borderRadius: '9999px',
  height: '100%',
})

export const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: '$white',
  border: '2px solid $purple500',
  boxShadow: '0 2px 10px $black',
  borderRadius: '$full',
  '&:hover': { backgroundColor: '$purple500' },
  '&:focus': { outline: 'none', boxShadow: `0 0 0 5px $black` },

  svg: {
    width: 20,
    height: 20,
    color: '$purple500',

    '&:hover': {
      color: '$white',
    },
  },
  span: {
    fontFamily: '$default',
    display: 'block',
    width: 'fit-content',
    padding: '$2',
    backgroundColor: '$blue900',
    color: '$white',
    border: '1px solid $purple500',
    borderRadius: '$sm',
  },
})
