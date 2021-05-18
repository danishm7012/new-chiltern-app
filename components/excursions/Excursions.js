import { Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import { Avatar } from 'react-native-elements'
import React from 'react'

const Excursions = ({ onSelect, title, logo }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 3,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}
        >
          <Avatar
            size="large"
            rounded
            imageProps={{ resizeMode: 'stretch', margin: 5 }}
            containerStyle={AllStyle.containerStyleAvatar}
            source={logo}
            onPress={onSelect}
            overlayContainerStyle={{ backgroundColor: '#fff' }}
            activeOpacity={0.7}
          />
          <Text
            style={{
              flex: 1,
              flexWrap: 'wrap',
              flexBasis: 30,
              fontSize: 12,
              marginTop: 10,
              marginBottom: 10,
              color: '#444',
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Excursions
