import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import CardFit from 'components/Cards/CardFit'
import { colors } from 'theme'

import { Container } from './styles'

const Home = ({ navigation }) => (
  <Container>
    <StatusBar barStyle="light-content" />
    <CardFit />
  </Container>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
