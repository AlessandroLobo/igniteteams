import { TouchableOpacityProps } from "react-native";
import { Container, Title, UsersThree } from "./styles";



interface IGroupCardProps extends TouchableOpacityProps {
  title: string;
}

// o rest operator (...) é usado para pegar todas as propriedades que não foram especificadas
export function GroupCard({ title, ...rest }: IGroupCardProps) {
  return (
    <Container>
      <UsersThree name={("users")} />
      <Title>{title}</Title>
    </Container>
  )
}