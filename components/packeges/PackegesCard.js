import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect } from 'react'

import { Dimensions } from 'react-native'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const Cards = ({ imgs, name, detail }) => {
  return (
    <TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 20, height: screenHeight / 5 }}>
        <ImageBackground
          source={imgs}
          style={{
            height: screenHeight / 5,
            resizeMode: 'stretch',
            width: screenHeight / 2.9,
          }}
        />
      </View>
    </TouchableOpacity>
  )
}
const PackegesCard = (props) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern2.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern3.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern4.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern5.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern6.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern7.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern8.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern9.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern10.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern11.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern12.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern13.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern14.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern15.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern16.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern17.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern18.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern19.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern20.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern21.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
      <Cards
        imgs={require('../../assets/ChiltrenPackages/chiltern22.jpg')}
        name={'Packeges'}
        detail={'Packeges Detail'}
      />
    </ScrollView>
  )
}

export default PackegesCard
