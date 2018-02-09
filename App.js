/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image
} from 'react-native';

import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Title
} from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons'

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./images/image1.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image2.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image3.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image4.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image5.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image6.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image7.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image8.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image9.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image10.jpeg'),
  }, {
    text: 'Card One',
    name: 'One',
    image: require('./images/image11.jpeg'),
  }
];

export default class App extends Component<{}> {
  render() {
    return (
      <Container>
        <Header style={{
          backgroundColor: '#fff'
        }}>
          <Left />
          <Body>
            <Title><Text>Tinder</Text></Title>
          </Body>
          <Right>
            <Button iconLeft transparent>
              <Icon name="ios-chatbubbles" />
            </Button>
          </Right>
        </Header>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 40,
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
