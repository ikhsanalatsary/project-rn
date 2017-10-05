import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import ContactScreen from '../Containers/ContactScreen'
import CreditScreen from '../Containers/CreditScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ContactScreen: { screen: ContactScreen },
  CreditScreen: { screen: CreditScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'CreditScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
