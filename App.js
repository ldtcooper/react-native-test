/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: false};
    this.viewText = this.viewText.bind(this);
  }

  viewText() {
    this.setState({showText: !this.state.showText });
  }

  render() {
    let display = this.state.showText ? "Borky Borky Borky, can't you see? Sometimes your words just hypontize me." : "";
    return (
      <View>
        <Text>
          {display}
        </Text>
        <Image
          style={{width: '100%', height: '80%'}}
          source={{uri: 'https://i.imgur.com/UwCfDrI.jpg'}}
        />
      <Button
        onPress={this.viewText}
        title="Bork!"
        color="#841584"/>
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
