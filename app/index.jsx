//app/index.jsx
import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import PrivatRouter from '../components/PrivateRoute'

const App = () => {
    return (
        <PrivatRouter>
            <View>
                <Link href="/home" className='text-red-500'><Text>Go to home</Text></Link>
            </View>
        </PrivatRouter>
    )
}

export default App