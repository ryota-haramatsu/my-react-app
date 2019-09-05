import React, { Component } from 'react';
import { StyleSheet, Alert, StatusBar, TextInput, Text, View } 
    from 'react-native';
import { Header } from 'react-native-elements';

export default class ThreeRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <Header
                centerComponent={{
                    text: 'SampleApp',
                    styel:StyleSheet.header
                }}
                outerContainerStyles={{
                    height:100,
                    backgroundColor: '#dd0000'
                }}
                />
                <View style={styles.base}>
                    <Text style={styles.title}>layout</Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            
                            <View style={styles.view} />
                            <View style={styles.view} />
                            <View style={styles.view} />
        

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            
                            <View style={styles.view} />
                            <View style={styles.view} />
                            <View style={styles.view} />
        

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            
                            <View style={styles.view} />
                            <View style={styles.view} />
                            <View style={styles.view} />
        

                        </View>
                    </View>
            </View>
        );   
    }
}

const styles = StyleSheet.create({
    base: {
        padding: 5,
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
    container: {
        flex:1,
    },
    view: {
        flex: 1,
        width: 100,
        height: 100,
        margin: 5,
        backgroundColor: '#6666aa',
    },
});