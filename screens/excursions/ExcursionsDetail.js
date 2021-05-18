import { FlatList, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import ExcursionsCards from '../../components/excursions/ExcursionsCards'
import HeaderButton from '../../components/headerButton/HeaderButton'
import React from 'react'
import { useSelector } from 'react-redux'

const ExcursionsDetail = (props) => {
  const excursionsData = useSelector(
    (state) => state.excursions.availableExcursions
  )

  const shTitle = props.navigation.getParam('excursionTitle')
  const DisplayedSubCompanies = excursionsData.filter(
    (exer) => exer.catagory === shTitle
  )
  const renderExcursions = (itemData) => {
    return (
      <ExcursionsCards
        title={itemData.item.name}
        images={itemData.item.image}
        costs={itemData.item.cost}
        price={itemData.item.price}
        onSelect={() => {
          props.navigation.navigate({ routeName: 'Contact_Us' })
        }}
      />
    )
  }
  return (
    <View style={{ width: '100%' }}>
      <FlatList
        data={DisplayedSubCompanies}
        keyExtractor={(item) => item._id}
        renderItem={renderExcursions}
        numColumns={1}
      />
    </View>
  )
}

ExcursionsDetail.navigationOptions = (navigationData) => {
  const excursionTitle = navigationData.navigation.getParam('excursionTitle')

  return {
    headerTitle: excursionTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="compdetail"
          iconName="ios-add"
          onPress={() => {
            navigationData.navigation.navigate('Excursions_Form')
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default ExcursionsDetail
