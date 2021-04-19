import React, { Component } from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'
 
import Swiper from 'react-native-swiper'
import AllStyle from '../../AllStyle'
  
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper autoplay = {false}  horizontal={false}  
      
      showsPagination={false}
      showsButtons={false}>
        <View style={AllStyle.slide1}>
          <Image style={AllStyle.imagess} source={require('../../assets/images/excursions/admission-to-kidzania-600x433.jpg')}/>
        </View>
        {/* <View style={AllStyle.slide2}>
        <Image style={AllStyle.imagess} source={require('../../assets/images/excursions/admission-to-kidzania-600x433.jpg')}/>

          
        </View>
        <View style={AllStyle.slide3}>
        <Image style={AllStyle.imagess} source={require('../../assets/images/excursions/admission-to-kidzania-600x433.jpg')}/>

        </View> */}
      </Swiper>
    )
  }
}
 