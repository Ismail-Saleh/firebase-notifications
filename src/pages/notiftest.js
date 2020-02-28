//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';
import {PushNotification} from 'react-native-push-notification'
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';


// create a component

class NotifTest extends Component {
    constructor(props){
        super(props)
        this.state={

        }
        
    }
    async componentDidMount(){

        PushNotification.configure({    
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
              console.log("NOTIFICATION:", notification);   
            },    
          });
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>NotifTest</Text>
                <Button title="Press This" onPress={this.sendNotification} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default NotifTest;
