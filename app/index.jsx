//app/index.jsx
import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
    return (
        <View>
            <Link href="/home" className='text-red-500'>Go to home</Link>
        </View>
    )
}

export default App