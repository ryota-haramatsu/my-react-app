import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class From extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'check me',
            name: '',
            mail: '',
        };
    }

    doAction = () => {
        this.setState({
            message: 'name: ' + this.state.name + '/n' + this.state.mail,
        });
    }

    reuder() {
        return (
            <View>
                <Text>UI</Text>
                <Text>{this.state.message}</Text>
                <FormLabel labelStyle={{fontSize:24}}>Name</FormLabel>
                <FormInput 
                    inputStyle={{fontSize:24}}
                    onChangeText={(value) => this.setState({name:value})}
                />
                <FormValidationMessage labelStyle={{fontSize:18}}>
                    {this.state.name == '' ? 'type your name....':''}
                </FormValidationMessage>
                <FormLabel labelStyle={{fontSize:24}}>Mail Address</FormLabel>
                <FormInput 
                    inputStyle={{fontSize:24}}
                    onChangeText={(value) => this.setState({maile:value})}
                />
                <FormValidationMessage labelStyle={{fontSize:18}}>
                    {this.state.mail == '' ? 'type mail address....':''}
                </FormValidationMessage>
                <Button title='check!' onPress={this.doAction} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {

    },
    title: {

    },
    message: {

    },
    
})