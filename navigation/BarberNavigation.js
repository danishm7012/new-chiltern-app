import React,{useState} from 'react';
import {StyleSheet,Image, View,Text,TouchableOpacity, SafeAreaView} from 'react-native'
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import {Platform,Dimensions } from "react-native"
import Color from '../colors/Color'
import BarberShopsStackNavigation from './stackNavigation/BarberShopsStackNavigation'
import AboutStackNavigation from './stackNavigation/AboutStackNavigation'
import ContactUsStackNavigation from './stackNavigation/ContactUsStackNavigation';
import TermandConditionStackNavigation from './stackNavigation/TermandConditionStackNavigation';
import FAQStackNavigation from './stackNavigation/FAQStackNavigation';
import { ScrollView } from 'react-native-gesture-handler'
import FeaturePackegesStackNavigation from './stackNavigation/FeaturePackeges';






const MainDrawerNavigator = createDrawerNavigator({
   
  BarberShops: {
      screen: BarberShopsStackNavigation,
      navigationOptions:{
        drawerIcon: () => (
          <Ionicons name = 'home' size={25} color='white'/>
        ),
        
        drawerLabel:'Home',
      }
    
    },
    FeaturePackeges: {
    screen: FeaturePackegesStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'globe' size={25} color='white'/>
      ),
      
      drawerLabel:'Feature Packeges',
    }
  },
  
    About:{
      screen:AboutStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'information-circle-sharp'size={29} color='white'/>
        ),
        drawerLabel:'AboutUs',
      }
    },
  
  
  ContactUs:{
    screen: ContactUsStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'call-sharp'size={25} color='white'/>
      ),
      drawerLabel:'ContactUs',
    }
  },
  
  
  TermCondition:{
    screen: TermandConditionStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'reader-sharp'size={25} color='white'/>
      ),
      drawerLabel:'Term&Condition',
    }
  },
  
  
  FandQ:{
    screen: FAQStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'hand-left-sharp'size={25} color='white'/>
  
      ),
      drawerLabel:'FAQ',
    }
  },
  
  
  },{
    contentComponent: (props) => { 
      return (
      <ScrollView>
      <SafeAreaView style={{flex:1}}
      forceInset={{ top: '', horizontal: 'never' }}>
        <View style={{flex:1,backgroundColor:'#fbc81b', borderBottomRightRadius:200}}>
          <View style={styles.drawerLogo}>
  
            <Image style={{flex:0.6,width:'80%',resizeMode:'stretch'}} source={require('../assets/chiltern-logo.png')} />
          </View>
          </View>
          <DrawerItems {...props}/>
          
         <Text style={{color:'red'}}>Footer Area After</Text>
      </SafeAreaView>
      </ScrollView>
      
    )
},
   // drawerWidth: Dimensions.get('window').width * 1,
    drawerBackgroundColor: Color.drawerColor,
    // width: Dimensions.get('window').width * 2,
    contentOptions:{
      activeTintColor:'hsla(360, 100%, 100%, 1.0)',
      activeBackgroundColor : Color.accentColour,
      inactiveTintColor: '#808080',
      itemsContainerStyle: {
        marginVertical: 55,
        
      },
      labelStyle:{
        fontFamily: 'open-sans-bold',
        fontSize:18,
       
      },
      itemStyle:{
        marginVertical:10,
         
       
      },
      
    }
  });
  export default createAppContainer(MainDrawerNavigator);
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    drawerLogo:{
      flex:1,
      height: 100,
      alignItems: 'flex-start',
      marginTop:120, 
      justifyContent: 'flex-start',
      
    },

  });