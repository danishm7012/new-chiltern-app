import { FlatList, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Excursions from '../../components/excursions/Excursions.js'
import HeaderButton from '../../components/headerButton/HeaderButton'
import React from 'react'
import { useSelector } from 'react-redux'

const FilterPackeges = (props) => {
  const availableMeals = useSelector(
    (state) => state.excursions.filterExcursions
  )

  const renderExcursionItem = (itemData) => {
    return (
      <Excursions
        title={itemData.item.name}
        logo={itemData.item.image}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Excursions_Detail',
            params: {
              excursionId: itemData.item._id,
              excursionTitle: itemData.item.name,
            },
          })
        }}
      />
    )
  }

  if (availableMeals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No data Found !!</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={availableMeals}
        keyExtractor={(Item) => Item._id}
        renderItem={renderExcursionItem}
      />
    </View>
  )
}

FilterPackeges.navigationOptions = (navData) => {
  return {
    headerTitle: 'FilterPackeges',
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
  }
}

export default FilterPackeges
