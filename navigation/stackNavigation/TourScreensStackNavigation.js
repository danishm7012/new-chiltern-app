import Color from '../../colors/Color'
import { Platform } from 'react-native'
import TourCateg from './../../screens/tours/TourCateg'
import TourPkgs from './../../screens/tours/TourPkgs'
import TourPkgsDetail from './../../screens/tours/TourPkgsDetail'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const TourStackNavigator = createStackNavigator(
  {
    Tour_Categ: {
      screen: TourCateg,
    },
    Tour_Pkgs: {
      screen: TourPkgs,
    },

    TourPkgs_Detail: {
      screen: TourPkgsDetail,
    },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Color.accentColour : Color.primaryColour,
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: '200',
      },
      headerTintColor: 'white',
    },
  }
)

const TourStackNavigation = createAppContainer(TourStackNavigator)

export default TourStackNavigation
