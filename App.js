/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const {height, width} = Dimensions.get('screen');


const styles = StyleSheet.create({
  body:{
    color: 'red'
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'gray',
    width: width * 0.2,
    height: 200,
  },
});

const App: () => React$Node = () => {
  const response = 'Wrong User';
  console.log('Dimensions: ', {height, width});

  return (
    <View style={{
      flex: 1,
      width: width,
      height: height,
      backgroundColor: 'gray'
    }}>
      
      <View style={{
        flex: 1,
        width: width,
        height: 50,
      }}>
        <View style={{
          width: (width/3)*2,
          height: 50,
          color: 'white',
          paddingLeft: 5
        }} >
          <Text style={{
          color: 'white',
          fontSize: 30
          }} >
            Ricardo Ovando
          </Text>
          <Text style={{
          color: 'white'
          }}>
            37
          </Text>          
        </View>
        <View style={{
          width: width/3,
          height: 50,
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
          alignContent: 'flex-end',
          positionRight: 0,
          positionTop: 0,
          position: 'absolute',
          paddingRight: 5,
          paddingTop: 5
        }} >
          <Image
        style={{
          width:55,
          height:55,
          borderRadius:27
        }}
        source={{
          uri: 'https://i.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA',
        }}
          />
        </View>
      </View>


      <View style={{
        flex: 1,
        width: width,
        height: 60,
        position: 'absolute',
        top: 80
      }} >
        <View style={{
          flex: 1,
          width: width,
          height: 60,
          paddingTop: 5,
          paddingLeft: 5,
          paddingRight: 5
        }} >
          <Text style={{color: '#545252', fontSize: 25}}>Bio:</Text>
          <Text style={{color: 'black', fontSize: 25}}>Desarrollador Informático</Text>
        </View>
      </View>

      <View style={{
        flex: 1,
        width: width,
        height: height-300,
        position: 'absolute',
        top: 190,
        paddingLeft: 5,
        paddingRight: 5
      }}>

          <Text style={{color: '#545252', fontSize: 25}} >Descripción:</Text>
          
          <ScrollView style={{height:'100%'}}>
          <Text style={{color: 'black', fontSize: 25, textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae erat consequat dolor congue pretium et ut nisi. Vivamus euismod tortor nisi, ut scelerisque ante commodo eget. Nullam fermentum, ligula quis rutrum pretium, ex justo imperdiet nibh, ut laoreet ante tortor ut tortor. Nunc at aliquet neque. Nunc mattis euismod velit id maximus. Integer congue laoreet eleifend. Ut ligula lacus, egestas eu magna at, sodales porttitor dolor. Phasellus in dictum lectus. Maecenas imperdiet, nunc et elementum mattis, ex libero feugiat tellus, eu lobortis leo turpis at diam. Nam ipsum mauris, pellentesque quis ipsum in, tempus scelerisque purus.</Text>
          
          </ScrollView> 
      </View>
    </View>
  );

};

export default App;

