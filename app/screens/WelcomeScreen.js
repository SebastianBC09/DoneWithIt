import React from 'react';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native';

const background = require('../background.jpg');
const logo = require('../logo-red.png');


const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode='cover' style={styles.image}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
        <View style={styles.login}>
          <View style={styles.register} />
        </View>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    flex: 1,
  },
  logo: {
    width: 91,
    height: 91,
    alignSelf: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center'
  },
  login: {
    flex: 1,
    bottom: -485,
    backgroundColor: '#FC5C65',
  },
  register: {
    flex: 1,
    bottom: -58,
    backgroundColor: '#4ECDC4'
  }
});

export default WelcomeScreen;