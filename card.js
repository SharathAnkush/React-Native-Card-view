import React from 'react';

import { StyleSheet ,View,Text,Button} from 'react-native';

const Card = props => {
    return(
     <View  style={styles.Screen}>
          <Text  style={styles.text1}>🌾🌾🌾🌳
🌴🌾🌾🌾
        </Text>
        <View style={styles.input}>
            <Text  style={styles.green}> 🌳The green world🌳 </Text>
            <Text>.....</Text>
         <View  style={styles.btn}>
            <Button title="open"/>
            <Button title="reset"/>
         </View> 
        </View>
     </View>
    );
};

const styles = StyleSheet.create({
    Screen:{
        flex:1,
        padding:10,
        alignItems:'center'


    },

    text1:{
       
        fontSize:23,
        marginVertical:10,
        fontWeight:"500",
        color:'green'
        
      },

 input:{
   width:300,
   maxWidth:'80%',
   alignItems:'center',
   elevation: 8,
   backgroundColor:'white',
   padding:20,
   borderRadius:10


 },

 green:{
     fontSize:20,
     fontWeight:"200"
 },
    
 btn:{
  flexDirection:'row',
  width:'100%',
  justifyContent:'space-between',
  paddingHorizontal:20

 }
    

});

export default Card ;
