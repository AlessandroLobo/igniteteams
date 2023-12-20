import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { MaterialIcons } from '@expo/vector-icons'
import theme from "../../theme";


export type TButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: TButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left:12px;
`

export const Icon = styled(MaterialIcons).attrs({ theme })`
font-size: 24px;
color: ${(props: Props) => (props.type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK)};
`;