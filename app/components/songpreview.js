import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { Themes } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

export function SongPreview({ previewUrl }) {
// const ProfileScreen = ({ item, index }) => {
//     const username = route.params.username
//     const person = personData[username];
   
    return (
        <WebView
        source={previewUrl}
        style={{ backgroundColor: Themes.colors.background, justifyContent: "center", alignItems: 'center', flex: 1 }}
        />
    );
  }
