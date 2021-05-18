import { FlatList, View } from 'react-native'
import React, { useEffect } from 'react'

import TourPackeges from '../../data/TourPackeges'
import TourPkgsCom from '../../components/tours/TourPkgs'

const TourPkgs = (props) => {
  const [TourPackege, setTourPackege] = React.useState([])
  useEffect(() => {
    // const fetchStudent = async () => {
    //   const { data } = await axios.get('/api/StudentData')
    //   setStudentData(Tourpackages)
    // }
    setTourPackege(TourPackeges)
    //fetchStudent()
  }, [])
  const title = props.navigation.getParam('tourTitle')
  const TourPkgsData = TourPackege.filter((titl) => titl.catagory === title)
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
        data={TourPkgsData}
        keyExtractor={(Item) => Item.id}
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
