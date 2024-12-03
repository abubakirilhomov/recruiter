import { View, Text } from 'react-native'
import React from 'react'
import PrivateRoute from '@/components/PrivateRoute'

const Home = () => {
  return (
    <PrivateRoute>
      <View>
        <Text>Home</Text>
      </View>
    </PrivateRoute>
  )
}

export default Home