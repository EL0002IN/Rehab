import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default class Profile extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center' }}>
                <View style={styles.logo}>
                    <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                </View>
                {/* 
                <View style={styles.card1}>
                    <View style={{ flex: 0.5, margin: 7 }}>
                        <Text>Profile picture</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Lim Yat Heng</Text>
                        <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>ID: 039493902</Text>
                        <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>Age: 34 years old</Text>

                    </View>
                </View> */}

                <View style={styles.card2}>
                    <View style={{
                        flex: 0.1,
                        flexDirection: 'row'
                    }}>
                        <View>
                            <Text style={styles.text}>Exercise 1</Text>
                            <Text style={styles.content}>Estimated time:10 minutes</Text>
                        </View>

                        <View style={styles.circleGradient}>
                            <Text style={styles.buttontext}>Completed</Text>
                        </View>

                    </View>

                    <View style={{
                        flex: 0.1,
                        flexDirection: 'row'
                    }}>
                        <View>
                            <Text style={styles.text}>Exercise 2</Text>
                            <Text style={styles.content}>Estimated time:10 minutes</Text>
                        </View>

                        <View style={styles.circleGradient}>
                            <Text style={styles.buttontext}>Let's start</Text>
                        </View>

                    </View>

                    <View style={{
                        flex: 0.1,
                        flexDirection: 'row'
                    }}>
                        <View>
                            <Text style={styles.text}>Exercise 3</Text>
                            <Text style={styles.content}>Estimated time:10 minutes</Text>
                        </View>

                        <View style={styles.circleGradient}>
                            <Text style={styles.buttontext}>Let's start</Text>
                        </View>

                    </View>

                    <View style={{
                        flex: 0.1,
                        flexDirection: 'row'
                    }}>
                        <View>
                            <Text style={styles.text}>Exercise 4</Text>
                            <Text style={styles.content}>Estimated time:10 minutes</Text>
                        </View>

                        <View style={styles.circleGradient}>
                            <Text style={styles.buttontext}>Let's start</Text>
                        </View>

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
        fontSize: 20
    },

    content: {
        color: '#1B3254',
        fontSize: 15,
        opacity: 0.5,
        margin: 5
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
    },

    circleGradient: {
        margin: 1,
        backgroundColor: '#FF6B86',
        borderRadius: 30,
        width: 100,
        height: 30,

    },
    buttontext: {
        margin: 5,
        paddingHorizontal: 6,
        textAlign: "center",
        // backgroundColor: "white",
        color: '#ffffff',
        fontSize: 15,

    },

})