import { Platform } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from '../../Themes/'

export default {
  container: ApplicationStyles.screen.container,
  header: {
    height: Metrics.navBarHeight
  },
  navbar: {
    height: Metrics.navBarHeight - 10,
    backgroundColor: Colors.snow,
    paddingTop: 0,
    borderBottomColor: Colors.snow
  },
  title: { color: '#000', alignSelf: 'center' },
  menu: {
    flex: 1
  },
  logo: {
    alignSelf: Platform.OS === 'android' ? 'center' : null,
    width: 45,
    resizeMode: 'contain'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50
  },
  card: {
    marginBottom: Metrics.doubleSection,
    flex: 0
  },
  cardSendGift: {
    marginTop: 10
  },
  imageContainer: {
    flex: 1,
    width: null,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: 170
  },
  give: {
    color: Colors.snow,
    marginBottom: 10
  },
  credit: {
    fontSize: 36,
    color: Colors.snow
  },
  tabContainer: {
    flex: 1
  },
  tabbar: {
    backgroundColor: Colors.snow
  },
  indicator: {
    backgroundColor: Colors.primary
  },
  label: {
    color: '#000',
    fontWeight: '400'
  },
  forLabel: {
    marginTop: 30,
    marginBottom: -10,
    borderBottomColor: Colors.snow
  },
  forLabel1: {
    marginTop: 0
  },
  box: {
    marginTop: 30,
    marginBottom: 10,
    marginRight: 25,
    marginLeft: 15
  },
  forPicker: {
    marginTop: 30,
    marginBottom: 10,
    marginRight: 25,
    marginLeft: 15,
    borderBottomColor: Colors.snow
  },
  forPicker1: {
    paddingRight: 150
  },
  picker: {
    borderWidth: 1,
    borderColor: '#D9D5DC',
    borderRadius: 0,
    paddingLeft: 10,
    paddingRight: 80,
    height: 42
  },
  picker1: {
    width: 330,
    flex: 1
  },
  input: { height: 40 },
  helpWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10
  },
  help: {
    paddingLeft: 8,
    paddingRight: 8,
    height: 30,
    borderRadius: 50
  },
  topUpRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    marginTop: 15
  },
  sendGift: {
    marginTop: 20
  },
  topUpButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  sendGiftButton: {
    borderRadius: 0
  },
  viewCart: {
    borderRadius: 0,
    marginRight: 0
  },
  cartWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    width: 70
  }
}
