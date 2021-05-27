import { FlatList, View } from 'react-native'
import React, { useEffect } from 'react'

import TourPackeges from '../../data/TourPackeges'
import TourPkgsCom from '../../components/tours/TourPkgs'
import axios from 'axios'

const TourPkgs = (props) => {
  const category = props.navigation.getParam('tourTitle')
  const [TourPackege, setTourPackege] = React.useState([])
  useEffect(() => {
    const fetchPackeges = async () => {
      try {
        const { data } = await axios.get(
          `https://chiltern.herokuapp.com/api/package/${category}`
        )
        setTourPackege(data)
      } catch (err) {
        console.log(err)
      }
    }
    // setTourPackege(TourPackeges)
    fetchPackeges()
  }, [category])

  // const title = props.navigation.getParam('tourTitle')
  // const TourPkgsData = TourPackege.filter((titl) => titl.catagory === title)
  const renderTourpkgs = (itemData) => {
    return (
      <TourPkgsCom
        name={itemData.item.name}
        cost={itemData.item.cost}
        duration={itemData.item.duration}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'TourPkgs_Detail',
            params: {
              tourId: itemData.item._id,
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
        data={TourPackege}
        keyExtractor={(Item) => Item._id}
        renderItem={renderTourpkgs}

        // numColumns={1}
      />
    </View>
  )
}

TourPkgs.navigationOptions = (navData) => {
  const title = navData.navigation.getParam('tourTitle')

  return {
    headerTitle: title,
    // headerLeft: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Menu"
    //       iconName="ios-menu"
    //       onPress={() => {
    //         navData.navigation.toggleDrawer()
    //       }}
    //     />
    //   </HeaderButtons>
    // ),

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

export default TourPkgs
