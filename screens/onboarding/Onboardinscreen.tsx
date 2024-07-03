import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const Onboardinscreen = () => {
  let [fontsLoaded,fontError] = useFonts({
    
  })
  return (
    <View>
      <Text>Onboardinscreen</Text>
    </View>
  )
}

export default Onboardinscreen