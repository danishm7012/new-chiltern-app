import { createStackNavigator } from "react-navigation-stack";
import BarberShops from '../../screens/BarberShops'
import BarberServices from '../../screens/BarberServices'
import BarberBookAppointment from '../../screens/BarberBookAppointment'
import Color from '../../colors/Color'
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import ContactUs from '../../screens/contactUs/ContactUs'
import Filter from '../../screens/filter/Filter'
import ExcursionsDetail from '../../screens/excursions/ExcursionsDetail'
import Login from "../../screens/authScreen/Login";
import SignUp from "../../screens/authScreen/SignUp";

const BarberStackNavigation = createStackNavigator({
  
    Barber_Shops: {
    
      screen: BarberShops,
},
Services_Detail:{
  screen:BarberServices
  },

BarberBook_Appointment:{
    screen :ContactUs,
  },
  Excursions_Detail:{
    screen: ExcursionsDetail,
},
  Filter_Screen:{
         screen:Filter,
  },
  Login_Screen:{
    screen:Login,
  },
  Sign_Up:{
    screen:SignUp,
  },
},
{
  mode:'modal',
  defaultNavigationOptions:{
    headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour : Color.primaryColour
        
},
    headerTitleStyle:{
      fontFamily: "open-sans-bold",
        fontWeight: "200"
    },
      headerTintColor: 'white'
  }
});

const BarberShopsStackNavigation = createAppContainer(BarberStackNavigation)

export default BarberShopsStackNavigation
