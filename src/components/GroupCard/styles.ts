import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";
import Icon from 'react-native-vector-icons/FontAwesome';

// colocando o TouchableOpacity entre parenteses, ele já retorna o valor do TouchableOpacity como padrão
export const Container = styled(TouchableOpacity)`
width: 100%;
height: 90px;

background-color: ${theme.COLORS.GRAY_500};
border-radius: 6px;

flex-direction: row;
align-items: center;

padding: 24px;
margin-bottom: 12px;
`;

export const Title = styled.Text`
width: 100%;
font-size: ${theme.FONT_SIZE.MD}px;
color: ${theme.COLORS.GRAY_200};
font-family: ${theme.FONT_FAMILY.REGULAR};
`;

// Configura StyledIcon para receber o Icon do react-native-vector-icons usando font-awesome
export const UsersThree = styled(Icon)`
 font-size: 25px;
 color: ${theme.COLORS.GREEN_700};
 margin-right: 20px;

`;
