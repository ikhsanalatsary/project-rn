import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
import {
  Image,
  ScrollView,
  View,
  Keyboard,
  LayoutAnimation,
  Platform,
  ImageBackground,
  Dimensions
} from 'react-native'
import {
  Text,
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Tabs,
  Tab
} from 'native-base'

// import getTheme from '../../native-base-theme/components'
// import commonTheme from '../../native-base-theme/variables/commonColor'
// import { Actions as NavigationActions } from 'react-native-router-flux'
import { Colors, Images } from '../Themes'
import styles from './Styles/CreditScreenStyles'
// import Cart from '../Components/Cart'
import SendGift from '../Components/SendGift'
import Topup from '../Components/Topup'
// import Icon from 'react-native-vector-icons/Ionicons'

const months = [
  {
    name: '01 (Jan)',
    value: '01'
  }, {
    name: '02 (Feb)',
    value: '02'
  }, {
    name: '03 (Mar)',
    value: '03'
  }, {
    name: '04 (Apr)',
    value: '04'
  }, {
    name: '05 (May)',
    value: '05'
  }, {
    name: '06 (June)',
    value: '06'
  }, {
    name: '07 (Jul)',
    value: '07'
  }, {
    name: '08 (Aug)',
    value: '08'
  }, {
    name: '09 (Sep)',
    value: '09'
  }, {
    name: '10 (Oct)',
    value: '10'
  }, {
    name: '11 (Nov)',
    value: '11'
  }, {
    name: '12 (Dec)',
    value: '12'
  }
]

const giftCards = [ { category: 'Anniversary',
  mimetype: 'image/jpeg',
  path: 'https://storage.googleapis.com/multer-sharp.appspot.com/anniv.jpg',
  filename: 'anniv.jpg' },
{ category: 'Baby Shower',
  mimetype: 'image/jpeg',
  path: 'https://storage.googleapis.com/multer-sharp.appspot.com/baby-shower.jpg',
  filename: 'baby-shower.jpg' },
{ category: 'Birthday',
  mimetype: 'image/jpeg',
  path: 'https://storage.googleapis.com/multer-sharp.appspot.com/birthday.jpg',
  filename: 'birthday.jpg' },
{ category: 'Chinese New Year',
  mimetype: 'image/jpeg',
  path: 'https://storage.googleapis.com/multer-sharp.appspot.com/chinese.jpg',
  filename: 'chinese.jpg' },
{ category: 'Christmas',
  mimetype: 'image/jpeg',
  path: 'https://storage.googleapis.com/multer-sharp.appspot.com/christmas.jpg',
  filename: 'christmas.jpg' },
{ category: 'Father\'s Day',
  mimetype: 'image/jpeg',
  path: 'https://storage.googleapis.com/multer-sharp.appspot.com/dad.jpg',
  filename: 'dad.jpg' },
{ category: 'Diwali',
  mimetype: 'image/jpeg',
  path: 'https://storage.googleapis.com/multer-sharp.appspot.com/diwali.jpg',
  filename: 'diwali.jpg' },
{ category: 'Mother\'s Day',
  mimetype: 'image/jpeg',
  path: 'https://storage.googleapis.com/multer-sharp.appspot.com/mom.jpg',
  filename: 'mom.jpg' },
{ category: 'Ramadhan Kareem',
  mimetype: 'image/jpeg',
  path: 'https://storage.googleapis.com/multer-sharp.appspot.com/ram.jpg',
  filename: 'ram.jpg' } ]

const giftCategories = giftCards.map((item) => {
  const newItem = {
    category: item.category
  }
  return newItem
})

giftCategories.unshift({ category: 'All' })

class CreditScreen extends React.Component {
  static defaultProps = { months, giftCards, giftCategories }

  constructor (props) {
    super(props)
    this.state = {
      giftCards: props.giftCards,
      initialPage: 0,
      index: props.initialPage || 0,
      routes: [
        { key: '1', title: 'TOP UP' },
        { key: '2', title: 'SEND GIFT' }
      ],
      loaded: false
    }
    this.props = props
  }

  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    this.setState((prevState, props) => ({
      initialPage: props.initialPage || 0,
      index: props.initialPage || 0
    }))
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState((prevState, props) => ({
        giftCards: props.giftCards
      }))
    }, 1000)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  _handleIndexChange = index => {
    this.setState({
      index
    })
  }

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        labelStyle={styles.label}
        pressColor={Colors.primary}
        pressOpacity={0.5}
      />
    )
  }

  _renderScene = (state) => {
    const { route, navigationState } = state
    const { months, giftCategories } = this.props
    const { giftCards } = navigationState
    switch (route.key) {
      case '1':
        return (
          <Topup months={months} />
        )
      case '2':
        return <SendGift giftCards={giftCards} giftCategories={giftCategories} />
      default:
        return null
    }
  }

  render () {
    const {
      initialPage
    } = this.state
    const iOS = Platform.OS === 'ios'
    const android = Platform.OS === 'android'
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.menu}>
            <Button transparent onPress={() => {}}>
              <Icon name={'ios-menu'} />
            </Button>
          </Left>
          <Body>
            <Text>AppBar</Text>
          </Body>
          <Right>
            <View style={styles.cartWrapper} />
          </Right>
        </Header>
        <Header hasTabs style={styles.navbar}>
          <Left style={styles.menu}>
            <Button iconLeft transparent>
              <Icon name="arrow-back" style={{color: Colors.primary}} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>My Credits</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <ImageBackground source={{uri: 'https://i.pinimg.com/originals/86/4b/37/864b37aec49aad0e47ef3c034b1e56c5.jpg'}} style={styles.imageContainer} resizeMode="cover">
            <Text style={styles.give}>Credit (S$)</Text>
            <Text style={styles.credit}>500.00</Text>
          </ImageBackground>
          {/* {iOS && */}
            <TabViewAnimated
              style={[styles.tabContainer, this.props.style]}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={{
                height: 0,
                width: Dimensions.get('window').width
              }}
            />
          {/* } */}
          {/* {android &&
            <Tabs
              initialPage={initialPage}
              style={{backgroundColor: Colors.snow}}
              locked
            >
              <Tab heading="TOP UP" style={styles.tab}>
                <Topup months={months} />
              </Tab>
              <Tab heading="SEND GIFT" style={styles.tab}>
                <SendGift giftCards={giftCards} giftCategories={giftCategories} />
              </Tab>
            </Tabs>
          } */}
        </ScrollView>
      </Container>
    )
  }
}

CreditScreen.propTypes = {
  months: PropTypes.array,
  giftCards: PropTypes.array,
  giftCategories: PropTypes.array,
  initialPage: PropTypes.number
}
// CreditScreen.contextTypes = {drawer: PropTypes.object}
const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(CreditScreen)
