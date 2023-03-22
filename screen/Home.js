import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  

  return(
      <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.atas}>
                <FontAwesome5 name="home" size={24} color="white" />

                <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
                <FontAwesome5 name="user" size={24} color="white" />
                </TouchableOpacity>
               
            </View>
           
          </View>

          <View style={styles.card}>
            <Image
              style={{width:350, height:185, borderRadius:10}}
              source={require('../assets/Banner.png')}
            />
          </View>
          <View style={styles.cardItems}>
              <Text style={styles.daftarFilm} >Daftar Film</Text>
              <View style={styles.cardFilm}>

                <TouchableOpacity onPress={() => navigation.navigate('Film1')}><Image
                  style={{width: 170, height:170, borderRadius:10}}
                  source={require('../assets/Film1.png')}
                />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Film2')}><Image
                  style={{width: 170, height:170, borderRadius:10}}
                  source={require('../assets/Film2.png')}
                />
                </TouchableOpacity>
                
              </View>

              <View style={styles.cardFilm}>
                <TouchableOpacity onPress={() => navigation.navigate('Film3')}><Image
                  style={{width: 170, height:170, borderRadius:10, marginTop:12}}
                  source={require('../assets/Film3.png')}
                />
                </TouchableOpacity>

                 <TouchableOpacity onPress={() => navigation.navigate('Film4')}><Image
                  style={{width: 170, height:170, borderRadius:10, marginTop:12}}
                  source={require('../assets/Film4.png')}
                /> 
                </TouchableOpacity>
              </View>
              
          </View>
          
          
            <Text style={styles.copyright}>Copyright Pandu Wahyudi - 120140010</Text>
  
          
  
      </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  width :"100%",
  backgroundColor: 'black',
  overflow: "hidden",
  alignItems: "center",
},
  top: {
  width: "100%",
  alignItems: 'center',
  padding:35,
  marginTop:20,
},
  atas: {
  width: "100%",
  flexDirection:'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
header: {
  color: "#373737",
  fontSize: 12,
  top: 0,
  left: 140
},
daftarFilm: {
  color: "white",
  fontSize: 15,
  fontWeight : "bold",
  top: 0,
  marginTop:40,
},
  search: {
  color : '#ffff',
  width: '100%',
  height: 40,
  margin : 30,
  backgroundColor: "#e67e1f",
  fontSize: 20,
  borderRadius: 3,
  alignSelf: "center",
  textAlign: "center",
  fontweight : "Bold"
},
  header2: {
  margin: 5,
  fontWeight : "bold",

},
card: {
  margin: "auto",
  width: '90%',
  height: 100,
  borderRadius:10,
},
cardItems: {
  top : 80,
  margin: "auto",
  width: '90%',
  borderRadius:10,
},
cardFilm: {
  top : 10,
  flexDirection:'row',
  justifyContent:'space-between',
  margin: "auto",
  width: '100%',
  display:"flex",
  borderRadius:10,
},
input: {
  height: 40,
  width: '100%',
  padding: 10,
  borderRadius:3,
},
kotak: {
  padding:'auto',
  marginTop:150,
  backgroundColor:'#ffff',
  width:"100%",
  flex:1,

},

copyright: {
  color : '#797979',
  fontWeight: 'bold',
  marginBottom: 18,
  marginTop: 'auto',
  textAlign: 'center',
},

judul:{
   position:'absolute',
   fontSize:21,
   color:'white',
   fontWeight:'bold',
   left:135,
   top:55,
   textAlign:'center',
},
quote:{
   position:'absolute',
   fontSize:12,
   color:'white',
   fontWeight:'reguler',
   left:40,
   top:80,
   textAlign:'center',
}
});

export default Home;