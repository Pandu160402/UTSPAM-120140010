import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, Image, View, FlatList, StyleSheet, Text, Button,} from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5, iconType } from '@expo/vector-icons';
import { Video } from 'expo-av';

const Film1 = ({navigation}) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
                    <FontAwesome5 name="user" size={24} color="white" />
                  </TouchableOpacity>
          </View>
         
       </View>

       <View style={styles.detail}>
        <Text style={styles.judulFilm}>Close Your Eye</Text>
       </View>
         
        <Video
          ref={video}
          style={styles.video}
          source={require('../assets/Film1.mp4')}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button color={"red"}
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>

        <Text style={styles.copyright}>Copyright Pandu Wahyudi - 120140010</Text>

      </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header:{
    width:'100%',
    padding:20,
    height: 130,
    
  },

  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },

  heading2: {
    color: "#373737",
    fontSize: 12,
    textAlign: 'right',
    top : 4,
    left:10
  },
  top: {
    top : 24,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
    padding:15
  },
  detail:{
   margin: "auto",
   width: '100%',
   borderRadius:10,
   flexDirection:'column',
   alignItems:'center'
 },
 judulFilm:{
  color:'white',
  marginTop:50,
  marginBottom:20,
  textAlign:'center',
  fontSize :24,
  fontWeight : "bold"
},
  video: {
    alignSelf: 'center',
    width: 350,
    height: 200,
  },
  buttons: {
    paddingTop:5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 'auto',
    textAlign: 'center',
  },
}); 

export default Film1;
