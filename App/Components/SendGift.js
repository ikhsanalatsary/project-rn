/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import {
  Button,
  Body,
  Card,
  CardItem,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Left,
  Picker,
  Right,
  Spinner,
  Text,
  Thumbnail,
  Title
} from 'native-base'
// import { Actions as NavigationActions } from 'react-native-router-flux'
import DatePicker from 'react-native-datepicker'

import { Colors } from '../Themes'
import styles from '../Containers/Styles/CreditScreenStyles'

const { Item: PItem } = Picker

class SendGift extends Component {
  static propTypes= {
    giftCards: PropTypes.array,
    giftCategories: PropTypes.array
  }

  state = {
    giftCards: [],
    selectedType: 'Electronic',
    receipient: 'Recipient E-Mail Address',
    selectedAmount: '10',
    selectedMonth: null,
    selectedCategory: 'All',
    selectedGiftCard: '',
    date: new Date()
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState((prevState, props) => ({
        giftCards: props.giftCards,
        selectedGiftCard: props.giftCards[0].path
      }))
    }, 1000)
  }

  onDateChange = (date) => this.setState({ date })

  onAmountChange = (value) => {
    this.setState({
      selectedAmount: value
    })
  }

  onTypeChange = (value) => {
    this.setState((prevState, props) => {
      const newState = { selectedType: value }
      if (value === 'Physical') {
        newState.receipient = 'Recipient Address'
      }
      return newState
    })
  }

  onCategoryChange = (category) => {
    if (category === 'All') {
      this.setState((prevState, props) => ({
        selectedCategory: category,
        giftCards: props.giftCards
      }))
    } else {
      this.setState((prevState, props) => {
        const parentObject = {
          selectedCategory: category,
          giftCards: props.giftCards.filter((giftCard) => giftCard.category === category)
        }
        return { ...parentObject, selectedGiftCard: parentObject.giftCards[0].path }
      })
    }
  }

  onSelectedGiftCard = (selectedGiftCard) => {
    this.setState({ selectedGiftCard })
  }

  _keyExtractor = (item, index) => index;

  render () {
    const { giftCategories } = this.props
    const { date, selectedType, receipient, selectedAmount, selectedCategory, selectedGiftCard, giftCards } = this.state
    return (
      <Card style={styles.cardSendGift}>
        <Form>
          <Item stackedLabel style={styles.forLabel}>
            <Label>Occassion</Label>
          </Item>
          <Item style={styles.forPicker}>
            <Picker
              mode="dropdown"
              placeholder="All"
              note={false}
              renderHeader={(backAction) => (
                <Header>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" />
                    </Button>
                  </Left>
                  <Body>
                    <Title>Gift Category</Title>
                  </Body>
                  <Right />
                </Header>
              )}
              style={{...styles.picker, ...styles.picker1}}
              selectedValue={selectedCategory}
              onValueChange={this.onCategoryChange}
            >
              {giftCategories.map((giftcard, index) => (
                <PItem label={giftcard.category} value={giftcard.category} key={index} />
              ))}
            </Picker>
          </Item>
          {giftCards.length > 0 && selectedGiftCard.length > 0
            ? <View>
              <View style={{width: 400}}>
                <FlatList horizontal
                  data={giftCards}
                  keyExtractor={this._keyExtractor}
                  renderItem={({item}) =>
                    <TouchableOpacity onPress={() => this.onSelectedGiftCard(item.path)}>
                      <Thumbnail square
                        source={{uri: item.path}}
                        style={{height: 150, width: 200}}
                      />
                    </TouchableOpacity>
                  }
                />
              </View>
              <CardItem cardBody style={{marginTop: 15}}>
                <Image source={{uri: selectedGiftCard}} style={{height: 220, flex: 1}} />
              </CardItem>
            </View>
            : <Spinner color={Colors.primary} />
          }
          <Item stackedLabel style={styles.forLabel}>
            <Label>Type</Label>
          </Item>
          <Item style={styles.forPicker}>
            <Picker
              mode="dropdown"
              placeholder="All"
              note={false}
              renderHeader={(backAction) => (
                <Header>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" />
                    </Button>
                  </Left>
                  <Body>
                    <Title>Select Type</Title>
                  </Body>
                  <Right />
                </Header>
              )}
              style={{...styles.picker, ...styles.picker1}}
              selectedValue={selectedType}
              onValueChange={this.onTypeChange}
            >
              <PItem label="Electronic" value="Electronic" />
              <PItem label="Physical" value="Physical" />
            </Picker>
          </Item>
          <Item stackedLabel style={{...styles.forLabel, ...styles.forLabel1}}>
            <Label>Message</Label>
          </Item>
          <Item regular style={styles.box}>
            <Input
              style={styles.input}
              keyboardType="default"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              selectionColor={Colors.primary}
            />
          </Item>
          <Item stackedLabel style={{...styles.forLabel, ...styles.forLabel1}}>
            <Label>{receipient}</Label>
          </Item>
          <Item regular style={styles.box}>
            <Input
              style={styles.input}
              keyboardType="default"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              selectionColor={Colors.primary}
            />
          </Item>
          <Item stackedLabel style={{...styles.forLabel, ...styles.forLabel1}}>
            <Label>Amount Sent (S$)</Label>
          </Item>
          <Item style={{...styles.forPicker, ...styles.forPicker1}}>
            <Left><Text>S$</Text></Left>
            <Picker
              mode="dropdown"
              placeholder="All"
              note={false}
              renderHeader={(backAction) => (
                <Header>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" />
                    </Button>
                  </Left>
                  <Body>
                    <Title>Select Amount</Title>
                  </Body>
                  <Right />
                </Header>
              )}
              style={styles.picker}
              selectedValue={selectedAmount}
              onValueChange={this.onAmountChange}
            >
              <PItem label="10" value="10" />
              <PItem label="20" value="20" />
              <PItem label="50" value="50" />
              <PItem label="100" value="100" />
            </Picker>
            <Right />
          </Item>
          <Item stackedLabel style={{...styles.forLabel, ...styles.forLabel1}}>
            <Label>Deliver this gift on</Label>
          </Item>
          <Item style={{...styles.box, borderBottomColor: Colors.snow}}>
            <DatePicker
              style={{width: 200}}
              date={date}
              mode="date"
              placeholder="MM-DD-YYYY"
              format="MM-DD-YYYY"
              minDate={new Date()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={this.onDateChange}
            />
          </Item>
          <View style={[styles.topUpRow, styles.sendGift]}>
            <Button style={{...styles.topUpButton, ...styles.sendGiftButton}}>
              <Text>
                SEND GIFT
              </Text>
            </Button>
            <Button light
              style={{...styles.topUpButton, ...styles.viewCart}}
            >
              <Text>
                VIEW CART
              </Text>
            </Button>
          </View>
        </Form>
      </Card>
    )
  }
}

export default SendGift
