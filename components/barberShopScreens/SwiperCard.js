import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import AllStyle from '../../AllStyle'
import Swiper from 'react-native-swiper'

export default class SwiperComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Swiper
        autoplay={false}
        horizontal={false}
        showsPagination={false}
        showsButtons={false}
      >
        <View style={AllStyle.slide1}>
          <Image style={AllStyle.imagess} source={this.props.serImage} />
        </View>
      </Swiper>
    )
  }
}
