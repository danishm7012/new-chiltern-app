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
import React, { useEffect } from 'react'

import AllStyle from '../../AllStyle'
import Color from '../../colors/Color'
import HeaderButton from '../../components/headerButton/HeaderButton'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const TourPkgsDetail = (props) => {
  const pkgTitle = props.navigation.getParam('tourTitle')
  const id = props.navigation.getParam('tourId')

  const [TourPackegeDetail, setTourPackegeDetail] = React.useState({})
  useEffect(() => {
    const fetchPackeges = async () => {
      try {
        const { data } = await axios.get(
          `https://chiltern.herokuapp.com/api/package/ID/${id}`
        )
        setTourPackegeDetail(data)
      } catch (err) {
        console.log(err)
      }
    }
    // setTourPackege(TourPackeges)
    fetchPackeges()
  }, [id])

  //const selectedTour = Tourpackages.find((tour) => tour.id === countryId)
  //const inclusion = TourPackegeDetail.inclusions
  const precaution = TourPackegeDetail.precaution
  const exclude = TourPackegeDetail.exclude
  //const include = TourPackegeDetail.include
  const brngTo = TourPackegeDetail.bringTo
  const notAllowed = TourPackegeDetail.notAllowed
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
            {/* {inclusion.map((data) => (
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
            ))} */}

            <View style={{}}>
              {exclude && (
                <Text style={[{ fontSize: 18 }, AllStyle.Aboutheading]}>
                  Exclude..!
                </Text>
              )}
            </View>

            {exclude &&
              exclude.map((data) => (
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

            {brngTo &&
              brngTo.map((data) => (
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

            {notAllowed &&
              notAllowed.map((data) => (
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

            {precaution &&
              precaution.map((data) => (
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
TourPkgsDetail.navigationOptions = (navigationData) => {
  const serTitle = navigationData.navigation.getParam('tourTitle')

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
