import React from 'react';
import { Card,  Button, Icon } from 'react-native-elements'
import { FlatList, SafeAreaView,ScrollView, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {Dimensions} from 'react-native'
import ImageView from 'react-native-image-view';

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')


const Cards = ({ imgs,name,detail }) => {

 return ( 
   

 <TouchableOpacity 
 >
     
        <View style={{flex:1,marginLeft:20,height:screenHeight/5}}>
        <ImageBackground source={imgs}  style={{height:screenHeight/5,width:screenHeight/2.9}}/>
        {/* <Text style={{ fontFamily: 'open-sans-bold'}}>{name}</Text> */}
        
    {/* <Card.Image style={{height:screenHeight/5, width:screenHeight/2.9, resizeMode:'stretch'}} source={imgs}>
  
    </Card.Image> */}
    </View>
    {/* <Card.Title style={{fontFamily: 'open-sans-bold'}}>{name}</Card.Title>
    <Card.Divider/>

    <Text style={{marginBottom: 1 }}>
 {detail}
      </Text> */}
      {/* <Button
     // onPress={onSelect}
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#6c398f'}}
        title='MORE INFO' /> */}
{/* </TouchableOpacity>  </Card> */}
  
  </TouchableOpacity>

);
}
const PackegesCard = (props) => {

 // const renderItem = ({ item }) => {

    return (
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        
    >
      <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern2.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern3.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern4.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern5.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern6.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern7.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern8.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern9.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern10.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern11.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern12.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern13.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern14.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern15.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern16.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern17.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    <Cards
    
    imgs={ require('../../assets/ChiltrenPackages/chiltern18.jpg')  }
    name = {'Packeges'}
    detail = {'Packeges Detail'}
    />
    </ScrollView>
        // onSelect={()=>{
        //   props.navigation.navigate({routeName: 'Partners_Detail',
        //   params:{
        //     partnersDetailId: item.id
        //   }
        // });
        //}}
      
    );
  };
  
//   return (
//     <SafeAreaView>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={1}
//       />
//     </SafeAreaView>
//   );
// };
export default PackegesCard;