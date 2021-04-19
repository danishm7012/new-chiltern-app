import React, { useState } from "react";
import { View, Picker,Text, StyleSheet,Dimensions } from "react-native";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import {Button} from 'react-native-elements'
let {height, width} = Dimensions.get("window")

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState(" ");
  const [selectedValueOrigin, setSelectedValueOrigin] = useState(" ");
  const [selectedValueDestination, setSelectedValueDestination] = useState(" ");
 
 
  return (
    <View style={styles.container}>
      <View>
          <Text style={{fontSize:16,textTransform:'uppercase', fontFamily:'open-sans-bold'}}>
              By Origin
          </Text>
      </View>
      <View style={{ margin:10 ,borderWidth: 1.5, borderColor: 'grey', borderRadius: 4 }}>
      <Picker
      
        selectedValue={selectedValue}
        style={{ width:width , height:30 }}
        itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select a Region" value="" />
        <Picker.Item label="Cuba" value="cuba" />
        <Picker.Item label="Italy" value="italy" />
        <Picker.Item label="France" value="france" />
        <Picker.Item label="Europe at Large" value="europe" />
        <Picker.Item label="North America" value="northamerica" />
        <Picker.Item label="Central & South America" value="southamerica" />
        <Picker.Item label="Asia & Pasific" value="asiapasific" />
        <Picker.Item label="Africa" value="africa" />
        <Picker.Item label="All Region" value="allregion" />

      </Picker>
      </View>
      <View>
          <Text style={{fontSize:16,textTransform:'uppercase', fontFamily:'open-sans-bold'}}>
              By Tour Type
          </Text>
      </View>
      <View style={{ margin:10 ,borderWidth: 1.5, borderColor: 'grey', borderRadius: 4 }}>
      <Picker
      
        selectedValue={selectedValueOrigin}
        style={{ width:width , height:30 }}
        itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValueOrigin(itemValue)}
      >
        <Picker.Item label="Select Tour" value="" />
        <Picker.Item label="Culture + Walking" value="culture" />
        <Picker.Item label="Culinary" value="culinary" />
        <Picker.Item label="Family" value="family" />
        <Picker.Item label="MultiSport" value="multisport" />
        <Picker.Item label="River Cruising" value="rivercruising" />
        <Picker.Item label="Special Edition" value="specialedition" />
        <Picker.Item label="All Tour" value="alltour" />
      
      </Picker>
      </View>
      <View>
          <Text style={{fontSize:16, textTransform:'uppercase' ,fontFamily:'open-sans-bold'}}>
              Departure Date
          </Text>
      </View>
      <View style={{ margin:10 ,borderWidth: 1.5, borderColor: 'grey', borderRadius: 4 }}>
      <Picker
      
        selectedValue={selectedValueDestination}
        style={{ width:width , height:30 }}
        itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValueDestination(itemValue)}
      >
        <Picker.Item label="Select Departure Date" value="" />
        <Picker.Item label="January" value="junary" />
        <Picker.Item label="February" value="february" />
        <Picker.Item label="March" value="march" />
        <Picker.Item label="April" value="april" />
        <Picker.Item label="May" value="may" />
        <Picker.Item label="June" value="june" />
        <Picker.Item label="July" value="july" />
        <Picker.Item label="August" value="august" />
        <Picker.Item label="September" value="september" />
        <Picker.Item label="October" value="october" />
        <Picker.Item label="November" value="november" />
        <Picker.Item label="December" value="december" />
        <Picker.Item label="All Date" value="alldate" />
      
      </Picker>
      </View>
<View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <View style={{width:width/1.7}}>
      <Button
      buttonStyle={{backgroundColor:'#961a1d'}}
  title="Apply Filter"
/>
</View>
</View>
    </View>
  );
}


Filter.navigationOptions = navData => {
  
  return{

  headerTitle:'Filter',
//   headerLeft: () => (
//   <HeaderButtons HeaderButtonComponent = {HeaderButton}>
//     <Item 
//     title='Menu' 
//     iconName='ios-menu' 
//     onPress={() => {
//       navData.navigation.toggleDrawer();
//     }} /> 

//   </HeaderButtons>
// )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    
    }
  });
  
export default Filter;