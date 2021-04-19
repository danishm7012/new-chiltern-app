import Color from '../../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import FeaturePackeges from '../../screens/featurePackeges/FeaturePackeges';
import PackegesForm from '../../screens/featurePackeges/PackegesForm';



const FeaturePackegesStackNavigator = createStackNavigator({
    Feature_Packeges:{
    screen: FeaturePackeges,
  },
  Packeges_Form:{
screen:PackegesForm,
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
const FeaturePackegesStackNavigation = createAppContainer(FeaturePackegesStackNavigator);
export default FeaturePackegesStackNavigation
