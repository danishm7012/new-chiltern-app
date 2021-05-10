import BarberBookAppointment from '../../screens/BarberBookAppointment'
import BarberServices from '../../screens/BarberServices'
import BarberShops from '../../screens/BarberShops'
import Color from '../../colors/Color'
import ContactUs from '../../screens/contactUs/ContactUs'
import ExcursionsDetail from '../../screens/excursions/ExcursionsDetail'
import ExcursionsForm from "../../screens/excursions/ExcursionsForm";
import Filter from '../../screens/filter/Filter'
import FilterPackeges from "../../screens/filter/FilterPackeges";
import Login from "../../screens/authScreen/Login";
import {Platform} from "react-native"
import SignUp from "../../screens/authScreen/SignUp";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

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
  Filter_Packeges:{
    screen:FilterPackeges,
},
  Login_Screen:{
    screen:Login,
  },
  Sign_Up:{
    screen:SignUp,
  },
  Excursions_Form:{
    screen:ExcursionsForm
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
