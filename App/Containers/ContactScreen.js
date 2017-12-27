/* @flow */

import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class ContactScreen extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <Text>I'm the ContactScreen component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
