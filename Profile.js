import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default class Profile extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center' }}>
                <View style={styles.logo}>
                    <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                </View>

                <View style={styles.card1}>
                    <View style={{ flex: 0.5, margin: 7 }}>
                        <Text>Profile picture</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Lim Yat Heng</Text>
                        <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>ID: 039493902</Text>
                        <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>Age: 34 years old</Text>

                    </View>
                </View>

                <View style={styles.card2}>
                    <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Secondary Information</Text>
                    <View style={{
                        flex: 0.1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={styles.text}>Weight</Text>
                        <Text style={styles.text}>Height</Text>
                        <Text style={styles.text}>BMI</Text>
                    </View>

                    <View style={{
                        flex: 0.1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={styles.text}>70 Kg</Text>
                        <Text style={styles.text}>165 cm</Text>
                        <Text style={styles.text}>32.0</Text>
                    </View>

                    <Text style={styles.text}>Rehabilitation Centre</Text>
                    <View style={styles.box}>
                        <Text style={styles.content}>Rehabilitation Centre details</Text>
                    </View>

                    <Text style={styles.text}>Medical Description</Text>
                    <View style={styles.box}>
                        <Text style={styles.content}>Medical Description Deetails details</Text>
                    </View>

                    <Text style={styles.text}>Caretaker Name/ID</Text>
                    <View style={styles.box}>
                        <Text style={styles.content}>Caretaker Details</Text>
                    </View>

                    <Text style={styles.text}>Physiotherapist Name/ID</Text>
                    <View style={styles.box}>
                        <Text style={styles.content}>Physiotherapist Details</Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        flex: 0.6,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        resizeMode: 'contain',
        width: 150,
        margin: 50,

    },

    card1: {
        flex: 0.5,
        flexDirection: 'row',
        width: 330,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },

    card2: {
        flex: 2,
        width: 330,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },

    line: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },

    text: {
        marginLeft: 5,
        marginRight: 10,
        color: '#1B3254',
    },

    content: {
        color: '#1B3254',
        fontSize: 15,
        opacity: 0.5
    },

    box: {
        flex: 0.1,
        width: 300,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }

})