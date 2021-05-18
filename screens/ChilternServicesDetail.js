import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AllStyle from '../AllStyle'
import { Button } from 'react-native-elements'
import HeaderButton from '../components/headerButton/HeaderButton'
import React from 'react'
import SERVICES from '../data/Services'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ChilternServicesDetail = (props) => {
  const compDetailId = props.navigation.getParam('servicesId')
  const selectedCompany = SERVICES.find(
    (company) => company._id === compDetailId
  )
  return (
    <View style={{ flex: 1 }}>
      <View style={AllStyle.aboutSwiper}>
        <Image style={AllStyle.aboutimage} source={selectedCompany.image} />
      </View>
      <View style={{}}>
        <Text style={AllStyle.Aboutheading}>Detail</Text>
      </View>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ScrollView style={{}}>
          <View>
            <View>
              <Text style={AllStyle.Aboutdetail}>{selectedCompany.detail}</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Button
                onPress={() => {
                  props.navigation.navigate({ routeName: 'Contact_Us' })
                }}
                title="Inquiry Now"
                raised={true}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
ChilternServicesDetail.navigationOptions = (navigationData) => {
  const serTitle = navigationData.navigation.getParam('servicesTitle')

  return {
    headerTitle: serTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="compdetail" iconName="ios-star" />
      </HeaderButtons>
    ),
  }
}

export default ChilternServicesDetail
