import React from 'react';
import { View,FlatList,Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Ratting from '../../components/rating/Rating'
import { Ionicons } from '@expo/vector-icons';
import Color from '../../colors/Color'
import EXCURSIONSCATEGORY from '../../data/ExcursionCategory'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
//import EXCURSION from '../../data/Excursions'
import ExcursionsCards from '../../components/excursions/ExcursionsCards'
import {useSelector} from 'react-redux'

const  ExcursionsDetail = (props) => {
  
    const excursionsData = useSelector(state => state.excursion.packeges)

  const shTitle = props.navigation.getParam('excursionTitle');
  const DisplayedSubCompanies = excursionsData.filter(
    exer => exer.catagory === shTitle  );  

   // const ListHeader = () => {
    //   //View to set in Header
    //   return (
    //     <View style={{flex:1}}>
    //       <Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444'}}>
    //           Excursions
    //       </Text>
    //     </View>
    //   );
    // };
    
     const renderExcursions = (itemData) =>{ 
          return(
            <ExcursionsCards
          title= {itemData.item.name}
          images = {itemData.item.image}
          costs = {itemData.item.cost}
          price = {itemData.item.price}
          onSelect={()=>{
            props.navigation.navigate({routeName: 'Contact_Us'})}}
  
  />
            );
          };  
 return (
  <View style={{width:'100%'}}>    
   
   <FlatList
         data={DisplayedSubCompanies}
         keyExtractor={item => item._id}
         renderItem={renderExcursions}
         numColumns={1}
        //  ListHeaderComponent={ListHeader}
       />
       </View>
      )
  }

  ExcursionsDetail.navigationOptions = navigationData => {
    const excursionTitle = navigationData.navigation.getParam('excursionTitle');
  //  const selectedCompany = ServicesData.find(shop =>shop.id===shId);
  
    return{
      headerTitle: excursionTitle, 
      headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="compdetail"
        iconName="ios-star"/>
      </HeaderButtons>
      )
    };
  
  };
  
  export default ExcursionsDetail