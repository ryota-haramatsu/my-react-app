import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View } from 'react-native';
import { Rating } from 'react-native-elements';

export default class RatingStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'check me!',
        };
    }

    doAction = (rating) => {
        this.setState({
            message: rating,
        });
    }

    render () {
        return (
            <View style={styles.base}>
                <Text styel={styles.title}>UI</Text>
                <Text style={styles.message}>{this.state.message}</Text>
                <Rating
                    showRating
                    type='heart'
                    ratingCount={7}
                    imageSize={50}
                    onFinishRating={this.doAction}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

})