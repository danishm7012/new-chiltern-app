import React from 'react'
import { View,Text,Dimensions,SafeAreaView,StatusBar, TouchableOpacity,ScrollView } from 'react-native'
import AllStyle from '../../AllStyle'
import {PricingCard,SocialIcon, Button,Avatar,Icon,Tile} from 'react-native-elements'
import SwiperComponent from './SwiperCard'
import SearchBars from '../../components/searchComponent/SearchBar'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

function BarberServicesGrid({onSelect}) {
    return (
<View style={{flex:1}}>
  
    <View style={AllStyle.aboutSwiper}>
    <SwiperComponent/>
    </View>
    <View style={{}}>
      <Text style={AllStyle.Aboutheading}>Detail</Text>
    </View>
    <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight, justifyContent:'center',alignItems:'center'}}>
      <ScrollView style={{ }}>
    <View >
    
    <View >
      <Text style={AllStyle.Aboutdetail}>
        We select each sector which strives to be beneficial and valuable to the country and general public, resulting in year on year revenue and fair wages for our clients. LB Globe is a massive platform of various companies & industries. It was established in, 2010 and its head office is located in Gulberg-Lahore, Punjab, Pakistan. 

</Text>
    </View>
    <View >
    <Button
      onPress={onSelect}
      title="Inquiry Now"
  raised={true}
  type="outline"
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
    )
}

export default BarberServicesGrid
