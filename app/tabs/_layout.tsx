import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{
            tabBarIcon: ({ color, focused }) => <FontAwesome name="home" size={24} color={color} />
        }}/>
        <Tabs.Screen name="explore" options={{ tabBarIcon: ({ color, focused }) => <FontAwesome name="eye" size={24} color={color} /> }} />
    </Tabs>
  )
}

export default TabsLayout