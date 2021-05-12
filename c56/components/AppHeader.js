import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class AppHeader extends React.Component{
 render(){
   return(

     <View style={styles.background}>
     <Text style={styles.title}> 
     DJ WhiteHat
     </Text>
     </View>
   )
 }
}


const styles= StyleSheet.create({
  background:
  {
    backgroundColor:'lightgray',
  },
  title:
  {
    color: 'black',
    textSize:20,
    textAlign:'center',
    fontWeight:'bold',
    padding:20

  }
})

export default AppHeader