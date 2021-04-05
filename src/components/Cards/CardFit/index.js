import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import logo from '../../../../assets/images/logo.png'

import { Container, ImageCard } from './styles'

const CardFit = ({
  title,
  width,
  height,
  color,
  backgroundColor,
  onPress,
  children,
  textStyle,
  style,
}) => {
  return (
    <Container onPress={onPress}>
      <View style={{ border: '1px solid #27AE60', borderRadius: '100%' }}>
        <ImageCard source={logo} />
      </View>
      <View style={{ marginLeft: 50, flexDirection: 'column' }}>
        <Text
          style={{
            color: '#27AE60',
            fontFamily: 'MavenPro_Medium',
            fontSize: 20,
          }}
        >
          Joao Queridao
          <View>
            <Text>test</Text>
          </View>
        </Text>
      </View>
    </Container>
  )
}

CardFit.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.string,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

CardFit.defaultProps = {
  title: null,
  width: 'auto',
  height: 'auto',
  color: 'black',
  backgroundColor: '#cacaca',
  onPress: () => {},
  children: null,
  textStyle: {},
  style: {},
}

export default CardFit
