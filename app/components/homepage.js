import { StyleSheet, SafeAreaView, Text, View,  Dimensions, Image,  ImageBackground } from "react-native";
import {Themes, Images} from "../../assets/Themes" 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function AuthenticationScreen() {
  return (
    <View style={styles.container} >
      <ImageBackground source={styles.spotifyBox} style={styles.spotifyBox} imageStyle={styles.spotifyBox}>
        <View style={styles.button}>
          <Image 
            style={styles.logo}
            source={Images.spotify}
          />
          <Text style={{ fontSize:15, color: 'white', paddingLeft: 15 }}>
            CONNECT WITH SPOTIFY
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      flexDirection: 'row',
    },
    spotifyBox: {
      backgroundColor: Themes.colors.spotify,
      width: windowWidth * 0.65,
      height: windowWidth * 0.15,
      borderRadius: 100,
      justifyContent: 'center',
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: windowWidth * 0.09,
      height: windowWidth * 0.09,
    },
  });