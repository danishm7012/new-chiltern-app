import React from 'react';
import { View,FlatList,Text,TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Ratting from '../../components/rating/Rating'
import { Ionicons } from '@expo/vector-icons';
import Color from '../../colors/Color'
import EXCURSIONSCATEGORY from '../../data/ExcursionCategory'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
//import EXCURSION from '../../data/Excursions'
import {useSelector} from 'react-redux'
//import ExcursionsCards from '../../components/excursions/ExcursionsCards'
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />



const PackegesCards = ({price,costs,images,onSelect,title}) => {
   

    return (
      <TouchableOpacity activeOpacity={0.3} onPress={onSelect}>
      <Card
      elevation={15}
      style={{marginBottom:20}}
    //   onPress= {()=>{
    //     props.navigation.navigate({routeName: 'Contact_Us'})}}
      >
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        {/* <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content> */}
        <Card.Cover source={images} />
         <Card.Content >
             <View style={{ flexDirection:'row' ,alignItems:'center',justifyContent:'space-between'}}>
          <Title>{title}</Title>
          <View style={{flexDirection:'row'}}>
        <Ionicons name = 'location' size={18} color={Color.primaryColour} style={{marginLeft:20}}/>
         
          <Paragraph style={{}}>
              
              Dubai,UAE
              </Paragraph>
              </View>
          </View>
        </Card.Content>
        <Card.Content >
             <View style={{ flexDirection:'row' ,alignItems:'center',justifyContent:'space-between'}}>
          <Ratting/>
          <View style={{flexDirection:'row'}}>
        <Ionicons name = 'flash' size={18} color={Color.primaryColour} style={{marginLeft:20}}/>
         <Paragraph style={{}}>from  {price}</Paragraph>
              </View>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button onPress={onSelect}>Book Now</Button>
          
        </Card.Actions>
      </Card>
      </TouchableOpacity>
    );
    }
    
const  FeaturePackeges = (props) => {
    const excursionsData = useSelector(state => state.excursion.packeges)
  
    
     const renderExcursions = (itemData) =>{ 
          return(
            <PackegesCards
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
         data={excursionsData}
         keyExtractor={item => item._id}
         renderItem={renderExcursions}
         numColumns={1}
        //  ListHeaderComponent={ListHeader}
       />
       </View>
      )
  }

  FeaturePackeges.navigationOptions = navData => {
   // const excursionTitle = navigationData.navigation.getParam('excursionTitle');
  //  const selectedCompany = ServicesData.find(shop =>shop.id===shId);
  
    return{
      headerTitle: 'Feature Packeges', 
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent = {HeaderButton}>
          <Item 
          title='Menu' 
          iconName='ios-menu' 
          onPress={() => {
            navData.navigation.toggleDrawer();
          }} /> 
      
        </HeaderButtons>
      ),
      headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="compdetail"
        iconName="ios-add"
        onPress={
          () => {
            navData.navigation.navigate('Packeges_Form')
          }
         }
        
        />
      </HeaderButtons>
      )
    };
  
  };
  
  export default FeaturePackeges