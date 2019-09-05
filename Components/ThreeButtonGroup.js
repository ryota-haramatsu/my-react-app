import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View  
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export default class ThreeButtonGroup extends Component {
  buttons = [
  {title:'one', element: () => <Text style={styles.item}>One</Text>},
  {title:'two', element: () => <Text style={styles.item}>Two</Text>},
  {title:'three', element: () => <Text style={styles.item}>Three</Text>},
  ];

  constructor(props) {
    super(props);
    this.state = {
      message: 'check me',
      selectedIndex:0,
    };
  }

  doAction = (selectedIndex) => this.setState({
    message: selectedIndex + 1 + this.buttons[selectedIndex].title,
    selectedIndex: selectedIndex
  });

  render () {
    return (
      <View style={styles.base}>
          <Text style={styles.title}>UI</Text>
          <Text style={styles.message}>{this.state.message}</Text>
          <ButtonGroup 
            onPress={this.doAction}
            selectedIndex={this.state.selectedIndex}
            buttons={this.buttons}
            containerStyle={{height: 75}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    padding: 0,
    flex:1,
  },
  body: {
    padding: 10,
    flex: 1,
  },
  header: {

  },
  title: {
    fontSize:30,
    paddingLeft:10
  },
  message: {
    fontSize:20,
    paddingLeft:10
  },
  section: {
    padding: 10,
    margin: 2,
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#ccccff',
    padding: 10,
    margin: 3,
    fontSize: 20,
  },
});