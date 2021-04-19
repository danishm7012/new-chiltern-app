import Color from '../../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import FeaturePackeges from '../../screens/featurePackeges/FeaturePackeges';



const FeaturePackegesStackNavigator = createStackNavigator({
    Feature_Packeges:{
    screen: FeaturePackeges,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColour  : Color.primaryColour
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  // Packeges_Form:{

  // },

  },

  
});
const FeaturePackegesStackNavigation = createAppContainer(FeaturePackegesStackNavigator);
export default FeaturePackegesStackNavigation
