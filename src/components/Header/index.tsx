
import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from "../../assets/logo.png"

interface IHeaderProps {
  showBackButton ?: boolean;
}

export function Header({ showBackButton = false }: IHeaderProps) {
  return (
    <Container>
      {showBackButton &&
        <BackButton>
          <BackIcon name="angle-left" />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  )
}