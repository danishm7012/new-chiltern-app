import React from 'react'
import { View,Text,Dimensions,SafeAreaView,StatusBar, TouchableOpacity,ScrollView } from 'react-native'
import AllStyle from '../AllStyle'
import {PricingCard,SocialIcon, Button,Avatar,Icon,Tile} from 'react-native-elements'
import SwiperComponent from '../components/barberShopScreens/SwiperCard'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/headerButton/HeaderButton'
import SERVICES from '../data/Services' 

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

 const BarberServices = props =>{

  const compDetailId = props.navigation.getParam('servicesId');
  const selectedCompany = SERVICES.find(company => company._id === compDetailId);
return ( 

<View style={{flex:1}}>
  
  <View style={AllStyle.aboutSwiper}>
  <SwiperComponent
      serImage = {selectedCompany.image}
  />
  </View>
  <View style={{}}>
    <Text style={AllStyle.Aboutheading}>Detail</Text>
  </View>
  <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight, justifyContent:'center',alignItems:'center'}}>
    <ScrollView style={{ }}>
  <View >
  
  <View >
    <Text style={AllStyle.Aboutdetail}>
    {selectedCompany.detail}
</Text>
  </View>
  <View style={{marginBottom:20}} >
  <Button
     onPress= {()=>{
      props.navigation.navigate({routeName: 'Contact_Us'})}}
    title="Inquiry Now"
raised={true}


/>
  </View>
  {/* <View style={{paddingTop: StatusBar.currentHeight*1.2, justifyContent:'center',alignItems:'center'}}>
      <SocialMediaIcon
      //  style={AllStyles.logo}
      //  style={{position:'absolute'}}
       facebookSocial={socialLinks.facebook}
       twitterSocial={socialLinks.twitter}
       linkedInSocial={socialLinks.linkedIn}
       instagramSocial={socialLinks.instagram}
       websiteSocial={socialLinks.website}
      />
      </View> */}
  </View>
  </ScrollView>
  </SafeAreaView>
</View>  
);
    }   
BarberServices.navigationOptions = navigationData => {
   const serTitle = navigationData.navigation.getParam('servicesTitle');
  // const selectedCompany = ServicesData.find(shop =>shop.id===shId);

  return{
    headerTitle: serTitle, 
    headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="compdetail"
      iconName="ios-star"/>
    </HeaderButtons>
    )
  };

};


export default BarberServices;

