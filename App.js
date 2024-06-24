
import 'react-native-gesture-handler';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, ScrollView, Pressable, useColorScheme } from 'react-native';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Slider from './components/Slider';

const Drawer = createDrawerNavigator();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerPosition: "left",
          drawerStyle: {
            backgroundColor: '#495E57',
          },
          headerStyle: {
            backgroundColor: '#FFDF00',
          },
          headerTintColor: 'black',
          drawerActiveTintColor:'white',
          drawerInactiveTintColor:'white'
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen}  />
        <Drawer.Screen name="Menu" component={Menu}  />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#495E57' : '#495E57' }]}>
    
      <Welcome style={styles.welcome} />
      <Slider style={styles.slider} />
      <View>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  button: {
    backgroundColor: '#FFDF00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:50,
    marginVertical: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {

    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  welcome: {
    backgroundColor: '#4682B4',
    backgroundColor:'red',
    width: '100%',
    alignItems: 'center',
  },
  slider: {
    backgroundColor: 'red',
    height: 200,
    width: '100%',
    marginVertical: 20,
  },
});
