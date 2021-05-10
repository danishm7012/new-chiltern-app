import {
  Avatar,
  Button,
  Icon,
  PricingCard,
  SocialIcon,
  Tile,
} from 'react-native-elements'
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AllStyle from '../../AllStyle'
import Color from '../../colors/Color'
import HeaderButton from '../../components/headerButton/HeaderButton'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import SwiperComponent from '../../components/barberShopScreens/SwiperCard'
import Tourpackages from '../../data/TourPackeges'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const TourPkgsDetail = (props) => {
  const pkgTitle = props.navigation.getParam('tourTitle')
  const countryId = props.navigation.getParam('tourId')
  const selectedTour = Tourpackages.find((tour) => tour.id === countryId)
  const incld = selectedTour.inclusions
  const precaution = selectedTour.precaution
  const exclude = selectedTour.exclude
  const inclsion = selectedTour.include
  const brngTo = selectedTour.bringTo
  const notAllowed = selectedTour.notAllowed
  return (
    <View style={{ flex: 1 }}>
      <View style={AllStyle.aboutSwiper}>
        <Image
          style={{ height: screenHeight / 3, resizeMode: 'stretch' }}
          source={require('../../assets/images/services/tour.jpg')}
        />
      </View>
      <View style={{}}>
        <Text style={[{ fontSize: 18 }, AllStyle.Aboutheading]}>
          {pkgTitle}
        </Text>
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
            <View style={{}}>
              <Text style={[{ fontSize: 18 }, AllStyle.Aboutheading]}>
                Packege Include..!
              </Text>
            </View>
            {incld.map((data) => (
              <View key={data}>
                <Text style={AllStyle.Aboutdetail}>
                  <Ionicons
                    name="arrow-forward"
                    size={20}
                    color={Color.primaryColour}
                    style={{}}
                  />{' '}
                  {data}
                </Text>
              </View>
            ))}

            <View style={{}}>
              {exclude && (
                <Text style={[{ fontSize: 18 }, AllStyle.Aboutheading]}>
                  Exclude..!
                </Text>
              )}
            </View>

            {exclude.map((data) => (
              <View key={data}>
                <Text style={AllStyle.Aboutdetail}>
                  <Ionicons
                    name="arrow-forward"
                    size={20}
                    color={Color.primaryColour}
                    style={{}}
                  />{' '}
                  {data}
                </Text>
              </View>
            ))}

            <View style={{}}>
              {brngTo && (
                <Text style={[{ fontSize: 18 }, AllStyle.Aboutheading]}>
                  Bring To..!
                </Text>
              )}
            </View>

            {brngTo.map((data) => (
              <View key={data}>
                <Text style={AllStyle.Aboutdetail}>
                  <Ionicons
                    name="arrow-forward"
                    size={20}
                    color={Color.primaryColour}
                    style={{}}
                  />{' '}
                  {data}
                </Text>
              </View>
            ))}

            <View style={{}}>
              {notAllowed && (
                <Text style={[{ fontSize: 18 }, AllStyle.Aboutheading]}>
                  Not Allowed..!
                </Text>
              )}
            </View>

            {notAllowed.map((data) => (
              <View key={data}>
                <Text style={AllStyle.Aboutdetail}>
                  <Ionicons
                    name="arrow-forward"
                    size={20}
                    color={Color.primaryColour}
                    style={{}}
                  />{' '}
                  {data}
                </Text>
              </View>
            ))}

            <View style={{}}>
              {precaution && (
                <Text style={[{ fontSize: 18 }, AllStyle.Aboutheading]}>
                  Precaution..!
                </Text>
              )}
            </View>

            {precaution.map((data) => (
              <View key={data}>
                <Text style={AllStyle.Aboutdetail}>
                  <Ionicons
                    name="arrow-forward"
                    size={20}
                    color={Color.primaryColour}
                    style={{}}
                  />{' '}
                  {data}
                </Text>
              </View>
            ))}

            {/* <View style={{ marginBottom: 20 }}>
              <Button
                onPress={() => {
                  props.navigation.navigate({ routeName: 'Contact_Us' })
                }}
                title="Inquiry Now"
                raised={true}
              />
            </View> */}
            {/* <View style={{paddingTop: StatusBar.currentHeight*1.2, justifyContent:'center',alignItems:'center'}}>
      <SocialMediaIcon
      //  style={AllStyles.logo}
      //  style={{position:'absolute'}}
       facebookSocial={socialLinks.facebook}
       twitterSocial={socialLinks.twitter}
       linkedInSocial={socialLinks.linkedIn}
       instagramSocial={socialLinks.instagram}
       websiteSocial={socialLinks.website}
      />
      </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
TourPkgsDetail.navigationOptions = (navigationData) => {
  const serTitle = navigationData.navigation.getParam('tourTitle')
  // const selectedCompany = ServicesData.find(shop =>shop.id===shId);

  return {
    headerTitle: serTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="compdetail" iconName="ios-star" />
      </HeaderButtons>
    ),
  }
}

export default TourPkgsDetail
