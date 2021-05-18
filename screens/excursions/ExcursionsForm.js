import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Avatar, Card, Paragraph, Title } from 'react-native-paper'
import React, { useCallback, useState } from 'react'

import Color from '../../colors/Color'
import { createExcursion } from '../../store/action/excursion'
import { useDispatch } from 'react-redux'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function ExcursionsForm(navData) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const dispatch = useDispatch()

  const submitHandler = useCallback(() => {
    dispatch(createExcursion({ title, price }))
    console.log('submitted!')
    Alert.alert('submitted!!!!!!')
  }, [dispatch, title, price])

  return (
    <ScrollView style={styles.container}>
      <Card
        elevation={65}
        style={{
          alignSelf: 'stretch',
          marginTop: screenHeight / 8.5,
        }}
      >
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'center',
            paddingTop: screenHeight / 7,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Excursion Title..."
                placeholderTextColor="#003f5c"
                value={title}
                onChangeText={(t) => setTitle(t)}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Price..."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                value={price}
                onChangeText={(p) => setPrice(p)}
              />
            </View>
            <TouchableOpacity
              style={[{ marginBottom: screenHeight / 7 }, styles.loginBtn]}
            >
              <Text onPress={submitHandler} style={styles.loginText}>
                Add Excursion
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </ScrollView>
  )
}

ExcursionsForm.navigationOptions = (navData) => {
  return {
    headerTitle: 'Add Excursions',
  }
}

export default ExcursionsForm
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputView: {
    backgroundColor: '#fff',
    width: '90%',
    height: 45,

    marginBottom: 20,
    alignItems: 'flex-start',
    borderWidth: 1,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: '60%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: Color.primaryColour,
    backgroundColor: Color.accentColour,
  },
  loginText: {
    color: '#fff',
    fontFamily: 'open-sans-bold',
  },
})
