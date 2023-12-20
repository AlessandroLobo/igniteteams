import { TouchableOpacityProps } from 'react-native'
import { Container, TFilterStyleProps, Title } from './styles'


type Props = TouchableOpacityProps & TFilterStyleProps & {
  title: string
}


export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container
      isActive={isActive}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}