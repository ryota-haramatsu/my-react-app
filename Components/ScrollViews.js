import React, { Component } from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View } 
    from'react-native';
import { Header } from 'react-native-elements';

export default class ScrollViews extends Component {
    items = ['one','two','three','four','five',
    'six','seven','eight','nine','ten'];

    constructor(props) {
        super(props);
        StatusBar.setBarStyle('dark-content', true);
        StatusBar.setBackgroundColor('#008080', true);
    }

    getView = (item, i) => (
        <View style={styles.view}>
            <Text style={{fontSize:36}}>{i}: {item}</Text>
        </View>
    )

    render() {
        return (
            <View style={styles.base}>
                <Header
                centerComponent={{
                    text:'sampleapp',
                    style:styles.header
                }}
                outerContainerStyles={{
                    height:100,
                    backgroundColor: '#dd0000'
                }}
                />
                <Text style={styles.title}>layout</Text>

                <ScrollView style={{flex:1}}>
                    {this.items.map((item, i) => {
                        this.getView(item, i)
                    })}
                </ScrollView>
            </View>
        );
    }   
}

const styles = StyleSheet.create({
    base:{

    },
    header: {

    },
    title: {

    },
    view: {

    },
})