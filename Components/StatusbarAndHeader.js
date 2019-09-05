import React, { Component } from 'react';
import { StyleSheet, Alert, StatusBar, TextInput, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class StatubarAndHeader extends Component {
    constructor(props) {
        super(props);
    }

    doActionLeft = () => {Alert.alert('left icon tapped!'); }
    doActionRight = () => {Alert.alert('right icon tapped!'); }

    render () {
        return (
            <View>
                <StatusBar barStyle='light' hidden={false} />
                <Header
                    leftComponent={{
                        icon: 'menu', 
                        color: 'white',
                        size:35,
                        onPress:this.doActionLeft
                    }}
                    centerComponent={{
                        text:'SampleApp',
                        style:StyleSheet.header
                    }}
                    rightComponent={{
                        icon: 'android',
                        color: 'white',
                        size:35,
                        onPress:this.doActionRight
                    }}
                    outerContainerStyles={{
                        height:100,
                        backgroundColor: '#dd0000'
                    }}
                    innerContainerStyles={{
                        backgroundColor: '#dd0000'
                    }}
                />
                <View style={styles.base}>
                    <Text style={styles.title}>layout</Text>
                    <Text style={styles.message}>this is sample message.</Text>
                </View>
            </View>
        ); 
    }   
}

const styles = StyleSheet.create({
    base: {
        padding: 20,
    },
    header: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    title: {
        padding: 10,
        color: 'red',
        fontSize: 48,
    },
    message: {
        padding: 10,
        color: 'blue',
        fontSize: 24,
    }
})