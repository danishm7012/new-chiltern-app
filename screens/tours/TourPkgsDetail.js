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
import Tourpackages from '../../data/TourPackeges'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const TourPkgsDetail = (props) => {
  // const [TourPackege, setTourPackege] = React.useState([])
  // useEffect(() => {
  //   // const fetchStudent = async () => {
  //   //   const { data } = await axios.get('/api/StudentData')
  //   //   setStudentData(Tourpackages)
  //   // }
  //   setTourPackege(Tourpackages)
  //   //fetchStudent()
  // }, [])
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
