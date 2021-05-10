import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper'
import { TouchableOpacity, View } from 'react-native'

import Color from '../../colors/Color'
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

//import Ratting from '../../components/rating/Rating'

const TourPkgsCom = ({ name, cost, duration, onSelect }) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={onSelect}>
      <Card
        elevation={15}
        style={{ marginBottom: 20 }}
        //   onPress= {()=>{
        //     props.navigation.navigate({routeName: 'Contact_Us'})}}
      >
        <Card.Cover
          style={{ resizeMode: 'stretch' }}
          source={require('../../assets/images/services/city.jpg')}
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
          >
            {/* {address && (
              <Ionicons
                name="location"
                size={18}
                color={Color.primaryColour}
                style={{}}
              />
            )}
            <Paragraph numberOfLines={1} ellipsizeMode="tail" style={{}}>
              {address}
            </Paragraph> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* <Ratting/> */}

            <View style={{ flexDirection: 'row' }}>
              {cost && (
                <Ionicons
                  name="flash"
                  size={24}
                  color={Color.primaryColour}
                  style={{}}
                />
              )}
              <Paragraph style={{}}>{cost}</Paragraph>
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
              {/* {bath && (
                <Icon
                  name="bathtub"
                  type="font-awesome"
                  size={24}
                  color="#121212"
                  style={{ marginLeft: 5 }}
                />
              )}
              <Paragraph numberOfLines={1} style={{}}>
                {' '}
                {bath}{' '}
              </Paragraph>
              {giraaj && (
                <Icon
                  name="car"
                  type="font-awesome"
                  color="#121212"
                  size={24}
                  style={{ marginLeft: 5 }}
                />
              )}
              <Paragraph style={{}}> {giraaj}</Paragraph>

              {area && (
                <Icon
                  name="square-foot"
                  type="material"
                  color="#121212"
                  size={28}
                  style={{}}
                />
              )}
              <Paragraph ellipsizeMode="tail" style={{}}>
                {area}
              </Paragraph> */}
            </View>
          </View>
        </Card.Content>
        <Card.Actions
          style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}
        >
          <Paragraph style={{ color: '#e00000' }}> Status</Paragraph>

          <Button
            mode="contained"
            style={{ backgroundColor: '#e00000' }}
            onPress={onSelect}
          >
            Inquiry Now
          </Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  )
}

export default TourPkgsCom
