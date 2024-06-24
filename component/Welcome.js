import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';

export default function Welcome() {
  return (
    
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Tap me!"
    >
      <View style={styles.container}>
      <Image
        style = {styles.logo}
        source={require('./img/littlelemonlogo.png')}
        resizeMode='contain'
      />
        <Text style={styles.text}>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#495E57',
    padding: 20,
    marginVertical: 10,
  },
  text: {
    width:'70%',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  logo:
  {
    flexGrow:1,
    height:'80%',
    width:'10%',
  }
});

