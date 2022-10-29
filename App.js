import { StyleSheet, SafeAreaView, Text, View, Dimensions, Image, ImageBackground } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes, Images } from "./assets/Themes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"; 
import { SongList } from "./app/components/songlist";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const AuthButton = ({authFunction}) => {
  return ( <Pressable  onPress={authFunction} >
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
  </Pressable>
  )
};
const List = () => {
  return (
    <View style={styles.container}>
      <SongList/>
      {/* <Image 
        style={styles.logo}
        source={Images.spotify}
      /> 
      <Text style={{ fontSize:20, color: 'white', fontWeight: 'bold', paddingLeft: 15 }}>
        Müge's recommendation
       </Text> */}
    </View>

  );
};


export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed
  if (token) {
    contentDisplayed = <List tracks={tracks} />
  } else {
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth} />
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  spotifyBox: {
    backgroundColor: Themes.colors.spotify,
    width: windowWidth * 0.65,
    height: windowHeight * 0.06,
    borderRadius: 100,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    backgroundColor: Themes.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
  },
});
