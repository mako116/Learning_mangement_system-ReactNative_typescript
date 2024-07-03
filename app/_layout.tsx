import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import OnBoarding from './(routes)/onboarding';

export default function RootLayout() {
   

  const [isLoggedIn, setIsLoggedIn]=useState(false)


  return (
      <>
       {isLoggedIn ?(
        <View>
          </View>
      ):(
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name='index'/>
          <Stack.Screen name='(routes)/Welcome-intro/index'/>
          <Stack.Screen name='(routes)/login/index'/>
        </Stack>
      )}
     </>
   );
}
