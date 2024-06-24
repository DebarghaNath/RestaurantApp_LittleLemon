import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet,KeyboardAvoidingView,Platform, TouchableWithoutFeedback,Keyboard,Alert} from 'react-native'

export default function Suggestion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sug, setSug] = useState("");

  return (
   <KeyboardAvoidingView style={styles.container} >
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style = {styles.container}>
        <Text style = {styles.label}>Name:</Text>
        <TextInput
          style = {styles.input}
          placeholder="Type name"
          multiline= {true}
          value={name}
          onChangeText={setName}
        />
        <Text style = {styles.label}>Email:</Text>
        <TextInput
          style = {styles.input}
          keyboardType={'number-pad'}
          placeholder="Type E-Mail"
          value={email}
          clearButtonMode='always'
          multiline={true}
          onChangeText={setEmail}
          
          
        />
        <Text style = {styles.label}>Suggestions:</Text>
        <TextInput
          style = {styles.input}
          placeholder="Type suggestions..."
          value={sug}
          onBlur={()=>Alert.alert("THANKS FOR SUGGESTION")}
          onChangeText={setSug}
        />
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      width:'100%',
      padding: 16,
      backgroundColor: '#495E57',
      
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
      color:'white'
    },
    input: {
      height: 40,
      borderColor: '#495E57',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 16,
      backgroundColor: '#F4CE14',
      color:'black'
    },
    suggestionsInput: {
      height: 80,
      textAlignVertical: 'top',
    },
  });