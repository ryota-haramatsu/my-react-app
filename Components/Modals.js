import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Modal, Button, Text, View }
    from 'react-native';
import { Header } from 'react-native-elements';

export default class Modals extends Component {
    constructor(props) {
        super(props);
        StatusBar.setBarStyle('dark-content', true);
        StatusBar.setBackgroundColor('#008080', true);
        this.state = {
            message: 'モーダルのサンプルです',
            modal: false,
        }
    }

    doAction = () => {
        this.setState({
            modal: true
        });
    }

    doModalAction = () => {
        this.setState({
            modal: false,
            message: 'モーダルを閉じました。'
        });
    }

    closeModal = () => {
        alert('close modal');
        this.setState({
            modal:false
        });
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
                    <Text style={styles.message}>{this.state.message}</Text>

                    <Modal 
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modal}
                        onRequestClose={this.closeModal}
                    >
                        <View style={{padding: 25}}>
                        <Text style={styles.modalTitle}>Modal View</Text>
                        <Text style={styles.modalContent}>＊これはモーダル表示のサンプルです。
                        </Text>             
                        <Button title="OK" onPress={this.doModalAction} />
                        </View>           
                    </Modal>
                    <View style={{padding: 10}}>
                        <Button title="click" onPress={this.doAction} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {padding: 0,
    flex: 1
    },
    body: {
        padding: 10,
        flex:1,
    },
    header: {

    },
    title: {

    },
    modalTitle: {
        padding: 10,
        fontSize: 28,
    },
    modalContent: {
        padding: 10,
        fontSize: 24,   
    }
});