import { TouchableOpacityProps } from "react-native";
import { Container, Title, UsersThree } from "./styles";



type IGroupCardProps = TouchableOpacityProps & {
  title: string;
}


// o rest operator (...) é usado para pegar todas as propriedades que não foram especificadas
export function GroupCard({ title, onPress, activeOpacity = 0.5, ...rest }: IGroupCardProps) {
 return (
   <Container onPress={onPress} activeOpacity={activeOpacity} {...rest}>
     <UsersThree name={("users")} />
     <Title>{title}</Title>
   </Container>
 )
}
