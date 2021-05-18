import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'

import Carousel from 'react-native-snap-carousel'
import exampleItems from '../data/CarouselData'

let { height, width } = Dimensions.get('window')

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [carouselItems, setCarouselItems] = useState(exampleItems)
  const ref = useRef(null)

  const renderItem = useCallback(
    ({ item, index }) => (
      <View
        style={{
          flex: 1,
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 305,
        }}
      >
        <Image
          style={{ flex: 1, width: width / 1.4, resizeMode: 'stretch' }}
          source={item.title}
        />
      </View>
    ),
    []
  )

  return (
    <SafeAreaView style={{ flex: 0.6, backgroundColor: '#ffffff' }}>
      <View
        style={{
          flex: 0.6,
          height: height / 4,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Carousel
          layout={'default'}
          ref={ref}
          data={carouselItems}
          sliderWidth={width / 1.4}
          itemWidth={width / 1.4}
          autoplay={true}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  )
}

export default CustomCarousel
