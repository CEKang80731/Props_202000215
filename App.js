import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Constants from 'expo-constants';

const App = () => {
  return (<>
    <View style = {{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container, styles.playingSpace]}>
      <Text>글을 씁니다.</Text>
      <Text>글을 또 씁니다.</Text>

      <Image source={require('./assets/favicon.png')}></Image>
      <ImageBackground>
        style = {{width:200, height: 200}}
        source ={{
          uri: 'https://imgnn.seoul.co.kr/img/upload/2019/11/22/SSI_20191122132005_V.jpg'
        }}
        </ImageBackground>
        </View>
   
    <ScrollView style={[styles.container]}>

      <View style={[styles.buttonView]}></View>
        <View style={[styles.buttonView]}>
        <Button title="CHANGE FLEX DIRECTION"/>
        </View>
        <View style={[styles.buttonView]}>
        <Button title="CHANGE JUSTIFY CONTENT"/>
        </View>
        <View style={[styles.buttonView]}>
        <Button title="CHANGE ALIGN ITEMS"/>
        </View>
        <View style={[styles.buttonView]}>
        <Button title="CHANGE DIRECTION"/>
        </View>
        <View style={[styles.buttonView]}>
        <Button title="CHANGE FLEX WRAP"/>
        </View>
        <View style={[styles.buttonView]}>
        <Button title="ADD SQUARE"/>
        </View>
        <View style={[styles.buttonView]}>
        <Button title="DELETE SQUARE"/>
        </View>

    </ScrollView>
  
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%'
  },
  playingSpace: {
    backgroundColor: "grey",
    borderColor: "blue",
    borderWidth: 3

  },
  controlSpace: {
    backgroundColor: '#A5A5A5',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonView: {

    width: '50%',
    padding:10
  }
});

export default App;