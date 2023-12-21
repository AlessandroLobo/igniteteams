import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { View } from 'react-native'
import { useTheme } from 'styled-components';


export function Routes() {
  const { COLORS } = useTheme();
  return (
    // Tira o Glitch o piscar da tela
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}