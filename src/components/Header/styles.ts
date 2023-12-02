import styled from "styled-components/native";
import theme from "../../theme";
import Icon from 'react-native-vector-icons/FontAwesome';



export const Container = styled.View`
width: 100%;

flex-direction: row;
align-items: center;
justify-content: center;

`;

export const Logo = styled.Image`
width: 46px;
height: 55px;
`;

export const BackButton = styled.TouchableOpacity`

flex: 1;
`;

// Configura StyledIcon para receber o Icon do react-native-vector-icons usando font-awesome
export const BackIcon = styled(Icon)`
 font-size: 45px;
 color: ${theme.COLORS.WHITE};
`;

