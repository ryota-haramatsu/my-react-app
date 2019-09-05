import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class Lists extends Component {
    list = [
        {
            title: 'Bar',
            subtitle: 'local bar list',
            icon: 'local-bar'
        },
        {
            title: 'Cafe',
            subtitle: 'local cafe list',
            icon: 'local-cafe'
        },
        {
            title: 'Drink',
            subtitle: 'local drink bar list',
            icon: 'local-drink'
        },
        {
            title: 'Dininge',
            subtitle: 'local restaurant list',
            icon: 'local-dining'
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            message: 'check me',
        };
    }

    getItem = (item, i) => (
        <ListItem
        key={i}
        title={item.title}
        titleStyle={{fontSize:32}}
        subtitle={item.subtitle}
        subtitleStyle={{fontSize:24}}
        leftIcon={{name: item.icon, size:50}}
        onPress={() => this.doAction(item,subtitle)}
        onPressRightIcon={() => this.doAction(item.subtitle)}
        />
    )

    doAction = (item) => {
        this.setState({
            message: item,
        });
    }

    render() {
        return (
            <View style={styles.base}>
                <Text style={styles.title}>UI</Text>
                <Text style={styles.message}>{this.state.messase}</Text>
                <List containerStyle={{marginBottom: 20}}>
                    {this.list.map(this.getItem)}
                </List>
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