import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper'
import { TouchableOpacity, View } from 'react-native'

import Color from '../../colors/Color'
import { Ionicons } from '@expo/vector-icons'
import Ratting from '../../components/rating/Rating'
import React from 'react'

const ExcursionsCards = ({ price, costs, images, onSelect, title }) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={onSelect}>
      <Card elevation={15} style={{ marginBottom: 20 }}>
        <Card.Cover source={images} />
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Title>{title}</Title>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="location"
                size={18}
                color={Color.primaryColour}
                style={{ marginLeft: 20 }}
              />

              <Paragraph style={{}}>Dubai,UAE</Paragraph>
            </View>
          </View>
        </Card.Content>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Ratting />
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="flash"
                size={18}
                color={Color.primaryColour}
                style={{ marginLeft: 20 }}
              />
              <Paragraph style={{}}>from {price}</Paragraph>
            </View>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button onPress={onSelect}>Book Now</Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  )
}

export default ExcursionsCards
