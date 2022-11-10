import { Text, View, StyleSheet, Dimensions, Image, Pressable, ImageBackground } from 'react-native';
import { Themes } from "../../assets/Themes";
import { millisToMinutesAndSeconds } from '../../utils';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export function SongTrack({ track, image, tittle, artist, album, duration, songDetails, previewUrl }) {

  const PreviewButton = ({tracks}) => {
    return ( 
      <Pressable   
        onPress={() => {
          navigation.navigate('Preview', {
            preview_url: previewUrl,
          });  
        }}>
        <ImageBackground source={styles.playBox} style={styles.playBox} imageStyle={styles.playBox}>
          <View style={styles.item}>
            <Ionicons name="play-circle-outline" size={24} color="white" backgroundColor="Themes.colors.background" />
          </View> 
        </ImageBackground> 
      </Pressable>
      );
  }

  const SongButton = ({tracks}) => {
    return ( 
      <Pressable   
        onPress={() => {
          navigation.navigate('Song', {
            songInfo: songDetails
          });
        }}>
      <View style={styles.item}>
        <Image 
        style={styles.cover}
        source={{ uri: 'https://i.scdn.co/image/ab67616d000048515395c7314233040e602aacb0' }}
        />
        <View style={styles.textSection}>
          <Text style={{ fontSize:12, color: 'white', paddingLeft: 8 }}>
            {tittle}
          </Text>
          <Text style={{ fontSize:12, color: 'grey', paddingLeft: 8 }}>
            {artist}
          </Text>
        </View>
        <Text style={{ fontSize:12, color: 'white' }}>
          {album}
        </Text>
        <Text style={{ fontSize:12, color: 'white', paddingLeft: 16 }}>
          {millisToMinutesAndSeconds(duration)}
        </Text>
      </View>
      </Pressable>  
       );
      }

      return (
        <View style={{justifyContent:"center"}} > 
          <PreviewButton tracks={track}/>
          <SongButton tracks={track}/>
        </View>
        );
    }

  const styles = StyleSheet.create({
    item: {
      backgroundColor: Themes.colors.background,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textSection: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    name: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 10,
      justifyContent: 'center',
      alignContent: 'center',
    },
    info: {
      fontSize: 16,
      color: 'black',
      borderWidth: 1,
      padding: 4,
      justifyContent: 'center',
      alignContent: 'center',
    },
    cover: {
      width: 64,
      height: 64,
      margin: 10,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignContent: 'center',
    },
    spotifyBox: {
      backgroundColor: Themes.colors.spotify,
      width: 24,
      height: 24,
      borderRadius: 100,
      justifyContent: 'center',
      flexDirection: 'row',
    }
  });