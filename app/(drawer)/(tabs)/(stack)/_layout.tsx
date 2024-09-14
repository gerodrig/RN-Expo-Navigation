import { Text } from 'react-native';
import { Stack, useNavigation } from 'expo-router';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if(canGoBack) {
        navigation.dispatch(StackActions.pop());
        return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? 'arrow-back-outline' : 'menu'}
            size={20}
            className="mr-5"
            color={tintColor}
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen name="home/index" options={{ title: 'Home Screem' }} />
      <Stack.Screen
        name="products/index"
        options={{ title: 'Products Screen' }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ title: 'Profile Screem' }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ title: 'Settings Screem' }}
      />
    </Stack>
  );
};

export default StackLayout;
