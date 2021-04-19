import React from 'react';
import { Text,SafeAreaView, View , Image} from 'react-native';
import AllStyle from "../../AllStyle";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import { ScrollView } from 'react-native-gesture-handler'
import SocialMediaIcon from '../../components/socialMediaIcon/SocialMediaIcon'


const About = props =>{
  return(
    <ScrollView>
    <SafeAreaView style={{flex:1}}>
    
  <View style={AllStyle.aboutMainClass}>
    <View style={{flex:1}}>
    <Image source={require('../../assets/images/excursions/dubai-burj-khalifa-tour-600x433.jpg')}  style={AllStyle.aboutimage}/>
    </View>
    <View style={{flex:1}}>
      <SocialMediaIcon/>
    </View>
    <View style={{}}>
      <Text style={AllStyle.Aboutheading}>About Us</Text>
    </View>
    
    
    <View style={{margin:7}}>
      <Text style={AllStyle.Aboutdetail}>The significance of the Chiltern travel and tourism is shown all through the world. If you want to go for a travel and have no clue about where to go? So, don’t need to get worried. You can find a sense of contentment and let us take the concern of taking you around the globe in style and hustle-free. Chiltern Travel and Tourism are unique with regards to giving the guests the best experiences. At Chiltern traveling and tourism, our effective associations and accomplice inns are our assurance that we will discover you the ideal convenience from a wide reach with the best rates accessible and take into account the entirety of your necessities for an exceptional occasion insight.Chiltern travel and tourism present to you the best chance to appreciate occasion at various objections across the world. With its stunning visit bundles, your excursion can be truly energizing. Have important travel encounters with family or even arrange an excellent special night by booking bundles with us. Assuming you can’t pick a spot in your financial plan, call our movement specialists to get your visit redone with Chiltern travel and tourism.

</Text>
    </View>

    <View style={{}}>
      <Text style={AllStyle.Aboutheading}>Our Vision</Text>
    </View>
    
    
    <View style={{margin:7}}>
      <Text style={AllStyle.Aboutdetail}>At Chiltern traveling and tourism, our effective associations and accomplice inns are our assurance that we will discover you the ideal convenience from a wide reach with the best rates accessible and take into account the entirety of your necessities for an exceptional occasion insight.

</Text>
    </View>

    <View style={{}}>
      <Text style={AllStyle.Aboutheading}>Our Mission</Text>
    </View>
    
    
    <View style={{margin:7}}>
      <Text style={AllStyle.Aboutdetail}>Nonetheless, the traveler is comparably significant, as without them there would be no real fun as Chiltern traveling provided the best personal satisfaction. Being a famous name around the world we provide our services to the countries around the globe. Chiltern T&T offers the best arrangements on visit bundles as well. We show comprehensive occasion bundles for overall objections that serve all your movement needs like airfare, inns and vehicle rentals, and so on  Chiltern T&T is taking an opportunity to significantly upgrade an individual’s satisfaction.

</Text>
    </View>

    <View style={{}}>
      <Text style={AllStyle.Aboutheading}>Our Aim</Text>
    </View>
    
    
    <View style={{margin:7}}>
      <Text style={AllStyle.Aboutdetail}>It is just about as agreeable as could be expected that Chiltern tourism we will furnish you with the most reasonable lodging for your uncommon escape and make your holidays memorable. Being a famous name around the world we provide our services to the countries around the globe. Chiltern T&T offers the best arrangements on visit bundles as well. We show comprehensive occasion bundles for overall objections that serve all your movement needs like airfare, inns and vehicle rentals, and so on. Other than our customary occasion visits, we additionally give modified visits. Contrast our rates and other travel gateways and make certain of getting the best arrangements. Along these lines, call our specialists to book significant occasions with us.

</Text>
    </View>

    <View style={{}}>
      <Text style={AllStyle.Aboutheading}>Our Destination</Text>
    </View>
    
    
    <View style={{margin:7}}>
      <Text style={AllStyle.Aboutdetail}>Chiltern Travel and Tourism is the main travel organization with tremendous involvement with responsive the travel industry, visit activities, and MICE industry in the Arabian Gulf territories of United Arab Emirates. Chiltern Travel and Tourism are consistently there to give you a magnificent city visit. From the World of Adventures including Ferrari World, IMG World of Adventures, Bollywood Parks to themed parks including Bollywood Parks, Legoland, and Riverland Dubai, we offer the most exciting and daring visits across UAE. We will take you across the globe to worldwide countries. Our destination is from UAE to USA, CANADA Asia Europe and many countries that you have not discovered yet…!!

</Text>
    </View>
    
  </View>
  
  </SafeAreaView>
  </ScrollView>
);
};

About.navigationOptions = navData => {
  
  return{

  headerTitle:'About',
  headerLeft: () => (
  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    <Item 
    title='Menu' 
    iconName='ios-menu' 
    onPress={() => {
      navData.navigation.toggleDrawer();
    }} /> 

  </HeaderButtons>
)
  }
}

export default About;