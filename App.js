import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View  
} from 'react-native';
import RatingStart from './Components/RatingStart';


export default class App extends Component {
  render () {
    return (
      <View>
          <RatingStart />
      </View>
    );
  }
}

