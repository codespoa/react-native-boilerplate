import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, ProfileNavigator, TeamNavigator } from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.green : colors.gray}
                size={20}
                solid
              />
            )
          case 'Perfil':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.green : colors.gray}
                size={20}
                solid
              />
            )
          case 'Calendario':
            return (
              <FontIcon
                name="calendar-alt"
                color={focused ? colors.green : colors.gray}
                size={20}
                solid
              />
            )
          case 'Campeonatos':
            return (
              <FontIcon
                name="trophy"
                color={focused ? colors.green : colors.gray}
                size={20}
                solid
              />
            )
          case 'Time':
            return (
              <FontIcon
                name="users"
                color={focused ? colors.green : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.darkGray,
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="Home"
    swipeEnabled
  >
    <Tab.Screen name="Time" component={TeamNavigator} />
    <Tab.Screen name="Campeonatos" component={HomeNavigator} />
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Calendario" component={ProfileNavigator} />
    <Tab.Screen name="Perfil" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
