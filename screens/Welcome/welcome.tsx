import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
 import {useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway'
  import{
    Nunito_400Regular,
    Nunito_700Bold,
  }from "@expo-google-fonts/nunito"
import { LinearGradient } from 'expo-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider'
import { onboardingSwiperData } from '@/constants/Constant'
import { router } from 'expo-router'
import { styles } from '@/styles/onboarding/onboard'
import { commonstyles } from '@/styles/common/common.style'


export default function WelcomeIntroScreen() {

  
         let [fontsLoaded,fontError] = useFonts({
          Raleway_700Bold,
          Nunito_400Regular,
          Nunito_700Bold,
        })
    

    if(!fontsLoaded && !fontError){
      return null;
    } 
    
    
    const renderItem = ({item}:{item:onboardingSwiperDataType}) => (
      <LinearGradient colors={["#e5ecf9", "#f6f7f9", "#e8eef9"]}
      style={{flex:1,paddingHorizontal:16}}
      >
        <View style={{marginTop:80}}>
          <Image
          source={item.image}
          style={{alignSelf:"center", marginBottom:30}}
          />
          <Text style={[commonstyles.title, {fontFamily:"Raleway_700Bold"}]}>
            {item.title}
          </Text>
          <View style={{marginTop:15}}>
            <Text style={[commonstyles.description, {fontFamily:"Nunito_400Regular"}]}>
              {item.description}
            </Text>
            <Text style={[commonstyles.description,
               {fontFamily:"Nunito_400Regular"}]}>
              {item.sortDescription}
            </Text>
            <Text style={[commonstyles.description, {fontFamily:"Nunito_400Regular"}]}>
              {item.sortDescription2}
            </Text>
          </View>
        </View>
      </LinearGradient>
    )
  return (
    <AppIntroSlider
    renderItem={renderItem}
    data={onboardingSwiperData}
    onDone={()=>{
      router.push("/login")
    }}
    onSkip={()=>{
      router.push("/login")
    }}
    renderNextButton={()=>(
      <View style={commonstyles.welcomeButton}>
        <Text 
        style={[styles.buttonText, {fontFamily:"Nunito_700Bold"}]}>
          Next
        </Text>
      </View>
    )}

    renderDoneButton={()=>(
      <View style={commonstyles.welcomeButton}>
        <Text 
        style={[styles.buttonText, {fontFamily:"Nunito_700Bold"}]}>
          Done
        </Text>
      </View>
    )}
    showSkipButton={false}
    dotStyle={commonstyles.dotStyle}
    bottomButton={true}
    activeDotStyle={commonstyles.activeDotStyle}
    />
  );
}


