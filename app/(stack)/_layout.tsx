import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack 
        screenOptions={{
            // headerShown: false,
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white',
            },

        }}
    >
        <Stack.Screen 
            name="home/index"
            options={{ title: 'Home Screem' }}
        />
        <Stack.Screen 
            name="products/index"
            options={{ title: 'Products Screen' }}
        />
        <Stack.Screen 
            name="profile/index"
            options={{ title: 'Profile Screem' }}
        />
        <Stack.Screen 
            name="home/settings"
            options={{ title: 'Settings Screem' }}
        />
    </Stack>
  )
}

export default StackLayout