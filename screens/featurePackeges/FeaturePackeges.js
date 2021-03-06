import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Color from '../../colors/Color'
import HeaderButton from '../../components/headerButton/HeaderButton'
import { Ionicons } from '@expo/vector-icons'
import Ratting from '../../components/rating/Rating'
import React from 'react'
import { useSelector } from 'react-redux'

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const PackegesCards = ({ price, images, onSelect, title }) => {
  return (
    <TouchableOpacity activeOpacity={0.3}>
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

const FeaturePackeges = (props) => {
  const excursionsData = useSelector(
    (state) => state.excursions.availableExcursions
  )

  const renderExcursions = (itemData) => {
    return (
      <PackegesCards
        keys={itemData.item._id}
        title={itemData.item.name}
        images={itemData.item.image}
        costs={itemData.item.cost}
        price={itemData.item.price}
        onSelect={() => {
          props.navigation.navigate({ routeName: 'Contact_Us' })
        }}
        onEdit={() => {
          props.navigation.navigate({
            routeName: 'Packeges_Form',
            param: {
              pkgId: itemData.item._id,
            },
          })
        }}
      />
    )
  }
  return (
    <View style={{ width: '100%' }}>
      <FlatList
        data={excursionsData}
        keyExtractor={(item) => item._id}
        renderItem={renderExcursions}
        numColumns={1}
      />
    </View>
  )
}

FeaturePackeges.navigationOptions = (navData) => {
  return {
    headerTitle: 'Feature Packeges',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="compdetail"
          iconName="ios-add"
          onPress={() => {
            navData.navigation.navigate('Packeges_Form')
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default FeaturePackeges
