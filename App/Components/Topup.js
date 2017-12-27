/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import {
  Button,
  Body,
  Card,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Left,
  Picker,
  Right,
  Text,
  Title
} from 'native-base'
import { Col, Grid } from 'react-native-easy-grid'
import PopoverTooltip from 'react-native-popover-tooltip'

import { Colors } from '../Themes'
import styles from '../Containers/Styles/CreditScreenStyles'

const { Item: PItem } = Picker

export default class Topup extends Component {
  static propTypes= {
    months: PropTypes.array
  }

  state = {
    date: new Date()
  }

  onValueChange = (value) => {
    this.setState({
      selectedMonth: value
    })
  }

  onDateChange = (date) => this.setState({ date })

  render () {
    const { months } = this.props
    const {
      selectedMonth
    } = this.state
    return (
      <Card style={styles.card}>
        <Form>
          <Item stackedLabel style={styles.forLabel}>
            <Label>Card Holder Name</Label>
          </Item>
          <Item regular style={styles.box}>
            <Input
              style={styles.input}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              underlineColorAndroid='transparent'
              selectionColor={Colors.primary}
            />
          </Item>
          <Item stackedLabel style={{...styles.forLabel, ...styles.forLabel1}}>
            <Label>Credit Card Number</Label>
          </Item>
          <Item regular style={styles.box}>
            <Input
              style={styles.input}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              underlineColorAndroid='transparent'
              selectionColor={Colors.primary}
            />
          </Item>
          <Item stackedLabel style={{...styles.forLabel, ...styles.forLabel1}}>
            <Label>Expiration Date</Label>
          </Item>
          <Item style={styles.forPicker}>
            <Grid>
              <Col style={{marginRight: 10}}>
                <Picker
                  mode='dropdown'
                  placeholder='Month'
                  note={false}
                  renderHeader={(backAction) => (
                    <Header>
                      <Left>
                        <Button transparent onPress={backAction}>
                          <Icon name='arrow-back' />
                        </Button>
                      </Left>
                      <Body>
                        <Title>Select Month</Title>
                      </Body>
                      <Right />
                    </Header>
                  )}
                  style={styles.picker}
                  selectedValue={selectedMonth}
                  onValueChange={this.onValueChange}
                >
                  {months.map((month, index) => (
                    <PItem label={month.name} value={month.value} key={index} />
                  ))}
                </Picker>
              </Col>
              <Col>
                <Item regular>
                  <Input
                    placeholder='Year'
                    style={styles.input}
                    keyboardType='default'
                    returnKeyType='next'
                    autoCapitalize='none'
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                    selectionColor={Colors.primary}
                  />
                </Item>
              </Col>
            </Grid>
          </Item>
          <Item stackedLabel style={{...styles.forLabel, ...styles.forLabel1}}>
            <Label>CVC (Security Code)</Label>
          </Item>
          <Grid>
            <Col>
              <Item regular style={styles.box}>
                <Input
                  style={styles.input}
                  keyboardType='default'
                  returnKeyType='next'
                  autoCapitalize='none'
                  autoCorrect={false}
                  underlineColorAndroid='transparent'
                  selectionColor={Colors.primary}
                />
              </Item>
            </Col>
            <Col style={styles.helpWrapper}>
              <PopoverTooltip
                ref='tooltip'
                buttonComponent={
                  <Button
                    style={styles.help}
                    onPress={() => this.refs.tooltip.toggle()}
                  >
                    <Icon name='help' />
                  </Button>
                }
                items={[
                  {
                    label: '3 digits number located at' + '\n' + ' the end of signature box',
                    onPress: () => {}
                  }
                ]}
                // animationType='timming'
                // using the default timming animation
                timmingConfig={{duration: 100}}
                opacityChangeDuration={100}
              />
            </Col>
          </Grid>
          <Item stackedLabel style={{...styles.forLabel, ...styles.forLabel1}}>
            <Label>Amount to Top Up (S$)</Label>
          </Item>
          <Item regular style={styles.box}>
            <Input
              style={styles.input}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              underlineColorAndroid='transparent'
              selectionColor={Colors.primary}
            />
          </Item>
          <View style={[styles.topUpRow]}>
            <Button style={styles.topUpButton} full>
              <Text>
                TOP UP
              </Text>
            </Button>
          </View>
        </Form>
      </Card>
    )
  }
}
