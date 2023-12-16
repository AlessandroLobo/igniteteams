import { TouchableOpacityProps } from "react-native";
import { Container, TButtonTypeStyleProps, Title } from "./styles";


type Props = TouchableOpacityProps & {
  title: string;
  type?: TButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container
      type={type}
      {...rest} >
      <Title>
        {title}
      </Title>
    </Container>

  )
}