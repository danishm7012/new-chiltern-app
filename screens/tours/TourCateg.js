import { Avatar, Button, Card, Icon } from 'react-native-elements'
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Share,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect } from 'react'

import HeaderButton from '../../components/headerButton/HeaderButton'
import TourCategCom from '../../components/tours/TourCategCom'
import TourCategory from '../../data/TourCategory'

const TourCateg = (props) => {
  const [TourCategories, setTourCategories] = React.useState([])
  useEffect(() => {
    // const fetchStudent = async () => {
    //   const { data } = await axios.get('/api/StudentData')
    //   setStudentData(Tourpackages)
    // }
    setTourCategories(TourCategory)
    //fetchStudent()
  }, [])
  const renderTourCategory = (itemData) => {
    return (
      <TourCategCom
        title={itemData.item.name}
        linearColor={itemData.item.linearColor}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Tour_Pkgs',
            params: {
              tourId: itemData.item.id,
              tourTitle: itemData.item.name,
            },
          })
        }}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={TourCategories}
        keyExtractor={(Item) => Item.id}
        renderItem={renderTourCategory}

        // numColumns={1}
      />
    </View>
  )
}

TourCateg.navigationOptions = (navData) => {
  return {
    headerTitle: 'Tour',
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

    // headerRight: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       iconName="person-add"
    //       onPress={() => {
    //         navData.navigation.navigate('Login_Screen')
    //         // Share.share({
    //         //   title: 'Paradisegoc App',
    //         //   message:  'https://reactnative.dev/docs/share'  + '\nHy! Happy to see you!'
    //         // }).then((res) => console.log(res))
    //         //   .catch((error) => console.log(error))
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
  }
}

export default TourCateg
