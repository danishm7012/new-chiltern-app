import React, { useState, useCallback, useRef } from 'react';
import { Text,Image, View, SafeAreaView,Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
let {height, width} = Dimensions.get("window")

const exampleItems = [
  {
    title: require('../assets/images/excursions/admission-to-kidzania-600x433.jpg'),
   
  },
  {
    title: require('../assets/images/excursions/quad-bike-600x433.jpg'),
    
  },
  {
    title: require('../assets/images/excursions/city-sightseeing-hop-on–hop-off-600x433.jpg'),

  },
  {
    title: require('../assets/images/excursions/aqua-venture-water-park-600x433.jpg'),

  },
  {
    title: require('../assets/images/excursions/jet-ski-600x433.jpg'),

  },
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }) => (
    <View
      style={{
        flex:1,
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 305,
        
        //marginLeft: 25,
        //marginRight: 25,
      }}
    >
      <Image style={{ flex:1,width:width/1.4,resizeMode:'stretch', }} source={item.title}/>
      {/* <Text>{item.text}</Text> */}
    </View>
  ), []);

  return (
    <SafeAreaView style={{ flex: 0.6, backgroundColor: '#ffffff' }}>
      <View style={{ flex: 0.6, height:height/4, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout={'default'}
          ref={ref}
          data={carouselItems}
          sliderWidth={width/1.4}
          
          itemWidth={width/1.4}
          autoplay={true}
          
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;