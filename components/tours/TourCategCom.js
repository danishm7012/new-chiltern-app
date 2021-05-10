import * as React from 'react'

import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { Button } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

export default function TourCategCom({ title, linearColor, onSelect }) {
  return (
    <ScrollView>
      <View style={[{ backgroundColor: linearColor }, styles.container]}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.background}
        />
        {/* <LinearGradient
          // Button Linear Gradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}
        > */}
        <View style={{ marginTop: 10, width: 100 }}>
          <Text
            style={{
              backgroundColor: 'yellow',
              color: '#8B0000',
              fontSize: 18,
              fontWeight: '700',
            }}
          >
            Hot Price
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Button
            title={title}
            type="outline"
            buttonStyle={{
              paddingHorizontal: 40,
              borderColor: '#fff',
              borderWidth: 1.5,
            }}
            //  containerStyle={{ color: '#fff' }}
            titleStyle={{ color: '#fff' }}
            onPress={onSelect}
          />
        </View>
        {/* <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Text style={[{ backgroundColor: 'blue', padding: 9 }, styles.text]}>
            Journeys end in lovers meeting
          </Text>
        </View> */}
        {/* </LinearGradient> */}
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    // alignSelf: 'stretch',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    // padding: 15,
    // paddingHorizontal: 90,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    // backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
})
