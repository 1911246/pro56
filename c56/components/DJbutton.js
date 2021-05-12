import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av'

class DJButtons extends React.Component{
playSound = async (url) => {
    await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true }
    );
  }

  
  render(){
    return(

      <View>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'yellow'}]}
        onPress={this.playSound('http://www.synthmania.com/Boss%20DR-220A/Audio Boss%20DR-220A%20Preset%20Patterns/Samba.mp3')}>
        <Text
          style={styles.buttonText}>
          Sound1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button,{backgroundColor:'green'}]}
        onPress={this.playSound('http://www.davesdrumworld.com/audio/Drumloops2/151_rome_proofmp3.mp3')}>
        <Text
          style={styles.buttonText}>
          Sound2
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button,{backgroundColor:'blue'}]}
        onPress={this.playSound('http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Fill-in%2016%20Beat(3).mp3')}>
        <Text
          style={styles.buttonText}>
          Sound3
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   button:{
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
         
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:20
  }
})
export default DJButtons