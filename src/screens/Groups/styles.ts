import styled from 'styled-components/native';
import theme from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';



export const Container = styled(SafeAreaView)`
flex: 1;
align-items: center;
background-color: ${theme.COLORS.BACKGROUND};
padding: 24px;
`

export const Title = styled.Text`
color: ${theme.COLORS.WHITE};
font-size: 32px;
`