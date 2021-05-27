import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { Button, Card, Paragraph, Title } from 'react-native-paper'
import React, { useEffect } from 'react'

import Color from '../../colors/Color'
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

const TourPkgsCom = ({ name, cost, duration, onSelect }) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={onSelect}>
      <Card elevation={15} style={{ marginBottom: 20 }}>
        <Card.Cover
          style={{ resizeMode: 'stretch' }}
          source={require('../../assets/ChiltrenPackages/chiltern17.jpg')}
        />
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <Title>{name}</Title>
          </View>
        </Card.Content>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          ></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              {cost && (
                <Icon
                  name="money-bill-wave"
                  type="font-awesome-5"
                  size={24}
                  color={Color.primaryColour}
                  style={{}}
                />
              )}
              <Paragraph style={{}}>Start from {cost}</Paragraph>
            </View>
            <View style={{ flexDirection: 'row' }}>
              {duration && (
                <Ionicons
                  name="time"
                  size={24}
                  color={Color.primaryColour}
                  style={{}}
                />
              )}
              <Paragraph style={{}}>{duration} </Paragraph>
            </View>
          </View>
        </Card.Content>
        <Card.Actions
          style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          {/* <Paragraph style={{ color: '#e00000' }}> Status</Paragraph> */}

          <Button
            mode="contained"
            style={{ backgroundColor: '#e00000' }}
            onPress={onSelect}
          >
            Detail
          </Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  )
}

export default TourPkgsCom
