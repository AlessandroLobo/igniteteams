import styled from "styled-components/native";
import theme from "../../theme";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

// Configura StyledIcon para receber o Icon do react-native-vector-icons usando font-awesome
export const UsersThree = styled(Icon)`
 font-size: 56px;
 color: ${theme.COLORS.GREEN_700};
align-self: center;

`;