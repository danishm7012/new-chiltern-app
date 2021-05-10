import { Avatar, Card, Paragraph, Title } from 'react-native-paper';
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import React, { useState } from 'react';

import Color from '../../colors/Color'
import HeaderButton from '../../components/headerButton/HeaderButton'
import { useSelector } from 'react-redux';

// import ImagePickerUpload from '../../components/imagePicker/ImageUpload'

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

 function PackegesForm(navData) {
    const [packege, setPackege] = useState('');
    const [cost, setCost] = useState('');

    const availablePakg = useSelector(state => state.excursions.updateExcursions);
   
console.log(displayedexcursions)
 
 return (

<ScrollView style={styles.container}>
    <Card
    elevation={65}
    style={{
      //  flex:1,
    alignSelf:'stretch',
    marginTop:screenHeight/8.5,
    // justifyContent:'center',
    // alignItems:'center',
    }}>
<View 
style={{
    flex:1,
alignSelf:'stretch',
justifyContent:'center',
paddingTop:screenHeight/7,
alignItems:'center',

}}
>
{/* <Image source = {require("./assets/logo.png")}/> */}

 {/* <View style={{flex:0.3,alignSelf:'stretch',
  justifyContent:'center',alignItems:'center', 
 
   }}>
 <Image style={{width:'70%',resizeMode:'stretch'}} source = {require("../../assets/chiltern-logo.png")}/>
     </View>    */}
   
<View style={{
  flex:1,
  alignSelf:'stretch',
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,
  
  }}>
    <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Packege Title..."
      placeholderTextColor="#003f5c"
      onChangeText={ (nam) => setPackege(nam)}
    />
  </View>
   
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Cost..."
      placeholderTextColor="#003f5c"
      
      onChangeText={(cos) => setCost(cos)}
    />
  </View>

  {/* <TouchableOpacity>
  <ImagePickerUpload/>
</TouchableOpacity> */}

  <TouchableOpacity  style={[{marginBottom:screenHeight/7},styles.loginBtn]}>
  <Text style={styles.loginText}>Add Packege</Text>
</TouchableOpacity>

</View>
  </View>
  </Card>
  </ScrollView>
 );
}


PackegesForm.navigationOptions = navData => {
  
    return{
  
    headerTitle:'Add Packeges',
    
    }
  }

export default PackegesForm
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: Color.accentColour,

    },
    
      inputView: {
        backgroundColor: "#fff",
        width: "90%",
        height: 45,

        marginBottom: 20,
        alignItems: "flex-start",
        borderWidth:1,
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
loginBtn:{
   width:"60%",
   height:50,
   borderRadius: 30,
   alignItems:"center",
   justifyContent:"center",
   marginTop:10,
   borderWidth:1,
   borderColor:Color.primaryColour,
   backgroundColor:Color.accentColour,
 },
 loginText:{
color:'#fff',
fontFamily:'open-sans-bold',
 },
  });