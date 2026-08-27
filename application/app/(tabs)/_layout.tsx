import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';
import { WorkerProvider } from '@/components/worker-context';

export default function TabLayout() {
  return (
    <WorkerProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#14b96a',
          tabBarInactiveTintColor: '#a3adb8',
          tabBarStyle: { backgroundColor: '#ffffff', borderTopColor: '#edf1f3' },
          headerShown: false,
          tabBarButton: HapticTab,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <MaterialIcons size={25} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="my-task"
          options={{
            title: 'My Tasks',
            tabBarIcon: ({ color }) => <MaterialIcons size={25} name="assignment" color={color} />,
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: 'History',
            tabBarIcon: ({ color }) => <MaterialIcons size={25} name="history" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <MaterialIcons size={25} name="person-outline" color={color} />,
          }}
        />
      </Tabs>
    </WorkerProvider>
  );
}
