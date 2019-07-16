import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Image, View } from 'react-native-animatable'
import imgLogo from '../../images/piguBlue.svg'
import CustomButton from '../../components/CustomButton'

/**
 * Just a centered logout button.
 */
export default class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          animation={'bounceIn'}
          duration={1200}
          delay={200}
          style={styles.logoImg}
          source={imgLogo}
        />
        <CustomButton
          text={'Salir'}
          onPress={this.props.logout}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#1976D2',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
