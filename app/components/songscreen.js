import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { Themes } from "../../assets/Themes";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

export function SongDetails(jimmy, timmy) {
// const ProfileScreen = ({ item, index }) => {
//     const username = route.params.username
//     const person = personData[username];
console.log("prop1 in SongDetails is ", jimmy)
console.log("prop2 in SongDetails is ", timmy)
// below is your code
// { songInfo }
    return (
        <WebView
        source={{  }}
        style={{ backgroundColor: Themes.colors.background, justifyContent: "center", alignItems: 'center' }}
        />
    );
  }

