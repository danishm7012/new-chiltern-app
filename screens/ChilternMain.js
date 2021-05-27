import { Button, Icon } from 'react-native-elements'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect } from 'react'

import CustomCarousel from '../components/CarouselSlider'
import EXCURSIONSCATEGORY from '../data/ExcursionCategory'
import Excursions from '../components/excursions/Excursions'
import HeaderButton from '../components/headerButton/HeaderButton'
import PackegesCard from '../components/packeges/PackegesCard'
import SERVICES from '../data/Services'
import SearchBars from '../components/searchComponent/SearchBar'
import Services from '../components/services/Services'
import TourCategory from '../data/TourCategory'
import TourPackegesHomeCategory from './../components/tours/TourPackegesHomeCategory'

const ChilternMain = (props) => {
  const [Service, setSERVICES] = React.useState([])
  const [ExcursionCategory, setExcursionCategory] = React.useState([])
  useEffect(() => {
    // const fetchStudent = async () => {
    //   const { data } = await axios.get('/api/StudentData')
    //   setStudentData(Tourpackages)
    // }
    setSERVICES(SERVICES)
    setExcursionCategory(EXCURSIONSCATEGORY)
    //fetchStudent()
  }, [])

  const renderTourPackegesCategory = (itemData) => {
    return (
      <TourPackegesHomeCategory
        title={itemData.item.name}
        logo={itemData.item.logo}
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

  const renderExcursionItem = (itemData) => {
    return (
      <Excursions
        title={itemData.item.name}
        logo={itemData.item.logo}
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

  const renderServicesItem = (itemData) => {
    return (
      <Services
        title={itemData.item.name}
        logo={itemData.item.logo}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Services_Detail',
            params: {
              servicesId: itemData.item._id,
              servicesTitle: itemData.item.name,
            },
          })
        }}
      />
    )
  }

  // const packegesFooter = () => {
  //   return (
  //     <View>
  //       <View style={{ flex: 0.3 }}>
  //         <Text
  //           style={{
  //             fontSize: 18,
  //             flex: 1,
  //             fontFamily: 'open-sans-bold',
  //             color: '#444',
  //           }}
  //         >
  //           Packeges
  //         </Text>
  //       </View>
  //       <PackegesCard />
  //     </View>
  //   )
  // }

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{ flex: 1, backgroundColor: 'hsla(360, 100%, 100%, 1.0)' }}
        >
          <View style={{ flex: 0.8 }}>
            <CustomCarousel />
          </View>
          {/* <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
            <SearchBars />
            <Button
              icon={<Icon name="search" size={39} color="#961a1d" />}
              type="outline"
              containerStyle={{ flex: 1, borderColor: '#444' }}
              buttonStyle={{ borderColor: '#444', borderWidth: 0.5 }}
            />
            <Button
              icon={
                <Icon
                  name="filter-alt"
                  size={39}
                  color="#961a1d"
                  onPress={() => {
                    props.navigation.navigate({ routeName: 'Filter_Screen' })
                  }}
                />
              }
              type="outline"
              containerStyle={{ flex: 1, borderColor: '#444' }}
              buttonStyle={{ borderColor: '#444', borderWidth: 0.5 }}
            />
          </View> */}
          <View style={{ flex: 0.3 }}>
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                fontFamily: 'open-sans-bold',
                color: '#444',
              }}
            >
              Choose Tour Destination
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={TourCategory}
              keyExtractor={(Item) => Item.id}
              renderItem={renderTourPackegesCategory}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="always"
              listViewDisplayed={false}
              numColumns={2}
            />
          </View>

          <View style={{ flex: 0.3 }}>
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                fontFamily: 'open-sans-bold',
                color: '#444',
              }}
            >
              Services
            </Text>
          </View>

          <View style={{}}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={Service}
                keyExtractor={(Item) => Item._id}
                renderItem={renderServicesItem}
                // ListFooterComponent={packegesFooter}
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps="always"
                listViewDisplayed={false}
                numColumns={2}
              />
            </View>
          </View>
          <View style={{ flex: 0.3 }}>
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                fontFamily: 'open-sans-bold',
                color: '#444',
              }}
            >
              Excursions
            </Text>
          </View>

          <View style={{}}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={ExcursionCategory}
                keyExtractor={(Item) => Item._id}
                renderItem={renderExcursionItem}
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps="always"
                listViewDisplayed={false}
                numColumns={3}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

ChilternMain.navigationOptions = (navData) => {
  return {
    headerTitle: 'Home',
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
          iconName="person-add"
          onPress={() => {
            navData.navigation.navigate('Login_Screen')
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default ChilternMain
