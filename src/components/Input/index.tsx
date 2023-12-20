import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from './styles';

export function Input({ ...rest }: TextInputProps) {

  // Usa o hook useTheme para pegar as cores do tema atual
  const { COLORS } = useTheme();

  return (
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest} />

  );
}

