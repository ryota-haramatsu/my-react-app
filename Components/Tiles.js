import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { Header, Tile } from 'react-native-elements';

export default class Tiles extends Component {
    constructor(props) {
        super(props);
        StatusBar.setBarStyle('dark-content', true);
        StatusBar.setBackgroundColor('#008080', true);
    }

    render() {
        return (
            <View style={styles.base}>
                <Header
                centerComponent={{
                    text:'sampleapp',
                    style:styles.header
                }}
                outerContainerStyles={{
                    height: 100,
                    backgroundColor: '#dd00000'
                }}
                />

                <View style={styles.body}>
                    <Text style={styles.title}>layout</Text>

                    <Tile
                        featured
                        imageSrc={require('../assets/image1.jpg')}
                        title="this is sample image tile component"
                        caption="this is sample caption"
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base:{

    },
    body: {

    },
    header: {

    },
    title: {

    },
    view: {

    },
})