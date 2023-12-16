import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import theme from "../../theme";

export type TButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: TButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  width: 100%;

  min-height: 56px;
  max-height: 56px;

  background-color: ${(props: Props) => (props.type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK)};

  border-radius: 6px  ;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.BOLD};
`;