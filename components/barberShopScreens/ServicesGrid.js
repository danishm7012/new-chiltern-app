import React from 'react'
import {TouchableOpacity,View,Text, ImageBackground,
TouchableNativeFeedback,
Platform,
Dimensions,
Image,
ScrollView,
} from 'react-native'
import PackegesCard from '../packeges/PackegesCard'
import CustomCarousel from '../CarouselSlider'
import CardsSlider from '../../screens/about/CardsSlider'
//import { Avatar } from "react-native-elements";
import SearchBars from '../../components/searchComponent/SearchBar'
 import { Card,Avatar, Icon, Button } from 'react-native-elements'
import AllStyle from '../../AllStyle'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
 let {height, width} = Dimensions.get("window")
import ServicesFlatlist from '../services/Services'
import Excursions from '../excursions/Excursions'

const ServicesGrid = ({onSelectFilter}) => {
let TouchableCom = TouchableOpacity;

if (Platform.OS==="android" && Platform.Version >= 21){
  TouchableCom = TouchableNativeFeedback;
}
  return(
    
      <ScrollView
      horizontal={false}
      style={{
        top:0,
        backgroundColor:'hsla(0,100%,100%,1)' }} 
      >
      
    
    <View style={{flex:1 }}>
      
 
      
    <View style={{ flex:0.8}}>
    <CustomCarousel/>

</View>
<View style={{flex:1,flexDirection:'row',marginTop:5}} >
    
    <SearchBars/>
    <Button
  icon={
    <Icon
      name="search"
      size={39}
      color="#961a1d"
    />
  }
  type="outline"
  containerStyle={{flex:1, borderColor:'#444'}}
  buttonStyle={{borderColor:'#444',borderWidth:0.5}}
/>
<Button
  icon={
    <Icon
      name="filter-alt"
      size={39}
      color="#961a1d"
    />
  }
  type="outline"
  onPress={onSelectFilter}
  containerStyle={{flex:1, borderColor:'#444'}}
  buttonStyle={{borderColor:'#444',borderWidth:0.5}}
/>
      </View>

                                             {/*  Services Start     */}
<View>
  <ServicesFlatlist/>
  
</View>


                              {/* Services End */}



<View style={{marginTop:10}}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444'}}>Packeges</Text>

</View>
<View style={{flex:1}}>

<PackegesCard/>
</View>

                              {/* Excursions Start */}

            <View>
               <Excursions
               
               />
            </View>


                                {/* Excursions End */}

</View>
      
</ScrollView>
  );
};
export default ServicesGrid