import { defaultIconColor } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  
  return (
    <Tabs
        screenOptions={{
            headerShown: true,
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size }) => (<Ionicons name='home-outline' size={size} color={defaultIconColor} />)
                }}
                />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ size }) => (<Ionicons name='file-tray-outline' size={size} color={defaultIconColor} />)
                }}
                />
    </Tabs>
  );
}
