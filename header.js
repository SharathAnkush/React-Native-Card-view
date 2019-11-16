import React from 'react';
import {View , Text, StyleSheet } from 'react-native';

const Header = props => {
    return(
        <View style={Styles.header}>
            <Text style={Styles.Title}>{props.title}</Text>
        </View>
    )
};

const Styles = StyleSheet.create ({
    header: {
        width:'100%',
        height:90,
        padding:36,
        backgroundColor:'green',
        alignItems:'center'
   },
   Title:{
       color:'#fff',
       fontSize:36,
       fontWeight:"700"
   }
});

export default Header ;