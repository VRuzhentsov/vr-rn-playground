import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit'
import BananaImage from './components/misc/BananaImage'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const alertBtnVariants = [
  { text: 'Ask me later' },
  { text: 'Cancel' },
  { text: 'OK' }
];

const ColoredRaisedButton = MKButton.coloredButton()
  .withText('Raised Button (Alert)')
  .withOnPress(() => {
    console.log('hi, raised button!');
    Alert.alert(
      'alert title',
      'hi, raised button!',
      alertBtnVariants
    );
  })
  .build();

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome today to React Native !</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <BananaImage/>
        <ColoredRaisedButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
