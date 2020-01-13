import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import Camera from './camera';
import Home from './Home';
import Profile from './Profile';
import Activities from './Activities';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text> This is my Home screen </Text>
//       </View>
//     );
//   }
// }

class ExploreScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0' }}>
        <Text> This is my Explore screen </Text>
      </View>
    );
  }
}

// class NotificationsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
//         <Text> This is my Notifications screen </Text>
//       </View>
//     );
//   }
// }

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0' }}>
        <Text> This is my Profile screen </Text>
      </View>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },

    Explore: {
      screen: Camera,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="camera" size={25} color={tintColor} />
        )
      }
    },

    Activities: {
      screen: Activities,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="fire" size={25} color={tintColor} />
        )
      }
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={25} color={tintColor} />
        )
      }
    },


    // Notifications: {
    //   screen: NotificationsScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="search" size={25} color={tintColor} />
    //     )
    //   }
    // },
    // Profile: {
    //   screen: ProfileScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="user" size={25} color={tintColor} />
    //     )
    //   }
    // },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#eb6e3d'
    }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);