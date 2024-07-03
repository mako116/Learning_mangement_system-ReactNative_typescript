import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Raleway_700Bold } from '@expo-google-fonts/raleway'
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { LinearGradient } from 'expo-linear-gradient'
import {styles} from "@/styles/onboarding/onboard";
import { router } from 'expo-router'
const Onboardinscreen = () => {
  let [fontsLoaded,fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  })

  if(!fontsLoaded && !fontError){
    return null;
  }
  return (
   <LinearGradient 
   colors={["#E5ECF9","#F6F7F9"]} style={{flex:1, alignItems:"center", justifyContent:"center"}}>
    <View style={styles.firstContainer}>
      <Image  
      source={require("@/assets/images/online_shop_logo.jpg")}
      style={styles.logo}
      />
 
      <View style={styles.titleWrapper}>
      
      <Text style={[styles.titleText,{ fontFamily:"Raleway_700Bold"}]} >
        Start learning with
      </Text>
      
    </View>
    <View>
    
      <Text  style={[styles.titleText,{ fontFamily:"Raleway_700Bold"}]}>
        ELearning
      </Text>
    </View>
    <View style={styles.discWrapper}>
      <Text style={[styles.discText ,{ fontFamily:"Nunito_400Regular"}]}>
      Explore a variety of Interactive lesson
      </Text>
      <Text style={[styles.discText ,{ fontFamily:"Nunito_400Regular"}]}>
        Video, quiz & assignment
      </Text>
    </View>
    <TouchableOpacity 
    onPress={()=> router.push("/(routes)/Welcome-intro")}
    style={styles.buttonWrapper}>
      <Text style={[styles.buttonText,{ fontFamily:"Nunito_700bold"}]}>
        Getting Started
      </Text>
    </TouchableOpacity>
    </View>
   </LinearGradient>
  )
}

export default Onboardinscreen