import React from 'react';
import { StyleSheet,Text,  View } from 'react-native';

import  Header from './header/header';
import Card from './card/card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Save The Earth"/>
      <Card/>
       
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1
   
   
  }


});
