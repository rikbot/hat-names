import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Amplify, { withAuthenticator } from 'aws-amplify-react-native'
// @ts-expect-error aws exports has no typing
import awsconfig from './aws-exports.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  hat: {
    fontSize: 100,
  },
})

Amplify.configure(awsconfig)

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.hat}>🎩</Text>
      <Text style={styles.title}>Hat Names</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default withAuthenticator(App, { signUpConfig: { hiddenDefaults: ['phone_number'] } })
