import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av'
import AppHeader from './components/AppHeader'
import DJButtons from './components/DJbutton'



class StopButton extends React.Component{
  render() {
    return (
      <TouchableOpacity
        style={{
         marginLeft:50,
         borderWidth:1,
         borderColor:'rgba(0,0,0,0.2)',
         alignItems:'center',
         justifyContent:'center',
         witdh: 50,
         height: 50,
         borderRadius: 100,
         marginTop:100,
         marginRight:50,
         backgroundColor:'red'
        }}
        onPress={()=>this.Audio.setIsEnabledAsync(false)}>
        <Text
          style={{
         fontWeight:'bold',
         fontSize:20
          }}>
          Stop
        </Text>
      </TouchableOpacity>
    );
  }
}
  



export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <DJButtons/>
        <StopButton/>

        
        
      </View>
    );
  }
}
