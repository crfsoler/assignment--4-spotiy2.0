import { Text, View, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { SongTrack } from './song';
import { Themes} from "./assets/Themes";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function SongList({tracks}) {

    const RenderTrack = ({ item, index }) => (
        <SongTrack
          track={index + 1}
          image={item.album.images}
          tittle={item.name}
          artist={item.artists.name}
          album={item.album.name}
          duration={item.duration.ms} />
    );  



    return ( 
        <View style={styles.container}>
        <View style={styles.titleRow}>
          <Image 
            style={styles.logo}
            source={Images.spotify}
          />  
          <Text style={styles.titleText}>Müge's recommendation</Text>
        </View>
        <FlatList
          data={tracks} // the array of data that the FlatList displays
          renderItem={(tracks) => RenderTrack(tracks)} // function that renders each item
          keyExtractor={(tracks) => item.track} // unique key for each item
        />
      </View>
    
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: Themes.colors.background,
      padding: 10,
    },
    titleRow: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor: Themes.colors.background,
      justifyContent: 'center',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 15,
      color: 'white',
    },
    logo: {
      width: windowWidth * 0.09,
      height: windowWidth * 0.09,
    },
  });