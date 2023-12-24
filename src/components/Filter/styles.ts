import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";

export type TFilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity) <TFilterStyleProps>`
/*  envia a propriedade isActive para o componente TouchableOpacity com borda ou sem borda */
  border: ${({ isActive }: TFilterStyleProps) => isActive ? '1px solid ' + theme.COLORS.GREEN_700 : '0'};

  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
text-transform: uppercase;

font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.SM}px;
color: ${theme.COLORS.WHITE};
`