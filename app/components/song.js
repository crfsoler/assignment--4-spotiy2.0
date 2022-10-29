import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Themes } from "./assets/Themes";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SongTrack({ track, image, tittle, artist, album, duration }) {
    return (
      <View style={styles.item}>
        <Text style={{ fontSize:10, color: 'grey', paddingLeft: 8 }}>
          {track}
        </Text>
        <Image 
        style={styles.cover}
        source={image}
        />
        <View style={styles.textSection}>
          <Text style={{ fontSize:10, color: 'white', paddingLeft: 8 }}>
            {tittle}
          </Text>
          <Text style={{ fontSize:10, color: 'grey', paddingLeft: 8 }}>
            {artist}
          </Text>
        </View>
        <Text style={{ fontSize:10, color: 'white', paddingLeft: 8 }}>
          {album}
        </Text>
        <Text style={{ fontSize:10, color: 'white', paddingLeft: 8 }}>
          {duration}
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    item: {
      backgroundColor: Themes.colors.background,
      padding: 16,
      marginVertical: 8,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      width: 80,
      height: 80,
      margin: 10,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignContent: 'center',
    }
  });

