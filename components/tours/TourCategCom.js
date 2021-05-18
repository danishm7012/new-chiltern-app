import * as React from 'react'

import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { Button } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

export default function TourCategCom({ title, linearColor, onSelect }) {
  return (
    <ScrollView>
      <View style={[{ backgroundColor: linearColor }, styles.container]}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.background}
        />

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
            titleStyle={{ color: '#fff' }}
            onPress={onSelect}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
})
