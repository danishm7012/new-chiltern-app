import { Dimensions, Text, TouchableOpacity, View } from 'react-native'

import AllStyle from '../../AllStyle'
import { Avatar } from 'react-native-elements'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const TourPackegesHomeCategory = ({ onSelect, title, logo }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 7,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flex: 0.6,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <Avatar
            size="large"
            //rounded
            // imageProps={{ resizeMode: 'stretch', margin: 5 }}
            containerStyle={AllStyle.containerStyleAvatar}
            // source={logo}
            title={title}
            titleStyle={{ color: '#121212', fontSize: 14 }}
            onPress={onSelect}
            overlayContainerStyle={{ backgroundColor: '#f7f5f5' }}
            activeOpacity={0.3}
          /> */}
          <TouchableOpacity
            style={{
              width: screenWidth / 2.1,
              paddingVertical: 10,
              //   paddingHorizontal: 20,
              backgroundColor: '#f7f5f5',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.5}
            onPress={onSelect}
          >
            <View>
              <Text
                style={{
                  flex: 1,
                  flexWrap: 'wrap',
                  flexBasis: 30,
                  fontSize: 15,
                  fontFamily: 'open-sans-bold',
                  marginTop: 10,
                  marginBottom: 10,
                  color: '#707070',
                }}
              >
                {title}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default TourPackegesHomeCategory
