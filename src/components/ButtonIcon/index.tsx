import { TouchableOpacityProps } from "react-native";
import { Container, Icon, TButtonIconTypeStyleProps } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';


type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: TButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', onPress, activeOpacity = 0.5, ...rest }: Props) {
  return (
    <Container onPress={onPress} activeOpacity={activeOpacity} {...rest}>
      <Icon
        name={icon}
        type={type}
      />
    </Container>
  )

}

