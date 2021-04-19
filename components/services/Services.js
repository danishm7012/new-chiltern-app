import React from 'react'
import {View,Text,Dimensions,FlatList} from 'react-native'
 import { Card,Avatar, Icon, Button } from 'react-native-elements'
import AllStyle from '../../AllStyle'
import SERVICES from '../../data/Services'

 let {height, width} = Dimensions.get("window")

function Services({onSelect,title,logo,image}) {
    return (
<View style={{flex:1}}>
{/* <View style={{marginTop:1 }}>
<Text style={{fontSize:18,fontFamily:'open-sans-bold', color:'#444' }}>Services</Text>

</View> */}
<View style={{marginTop:10, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
<View style={{flex:0.7,alignItems:'center',justifyContent:'center'}}>
<Avatar
  size="large"
  rounded
  imageProps={{resizeMode:'stretch',margin:5}}
  containerStyle={AllStyle.containerStyleAvatar}
  // resizeMode='stretch'
  source={logo}
  
   onPress={onSelect}
  overlayContainerStyle={{backgroundColor:'#fff'}}
  // onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Text style={{flex:1,flexWrap:'wrap', flexBasis:30,fontSize:12,marginTop:10, marginBottom:10, color:'#444'}}>{title}</Text>
</View>
</View>

</View>
   
)
}


//  const  ServicesFlatlist = () =>{
//     const renderItem = (itemData) =>{ 
//         return(
           
//           <Services
//         title= {itemData.item.name}
//         logo = {itemData.item.logo}
//         image={itemData.item.image}
//           onSelect={()=>{
//          props.navigation.navigate({routeName: 'Barber_Services',
//         //  params:{
//         //         serviceId : itemData.item._id,
//         //         serviceTitle : itemData.item.name
//         //       }
//         })
//           }}
//         //   onSelectFilter={()=>{
//         //     props.navigation.navigate({routeName: 'Filter_Screen'})
//         //      }} 
         
//           />
//           );
//         };  
//     return(
// <View style={{width:'100%'}}>    
 
//  <FlatList
//        data={SERVICES}
//        keyExtractor={item => item._id}
//        renderItem={renderItem}
//        numColumns={2}
//      />
//      </View>
//     )
// }
export default Services