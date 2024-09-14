import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, useNavigation } from 'expo-router';
import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Link href="/products" asChild>
          <CustomButton
            className="mb-2"
            color="primary"
            // onPress={() => router.push('/products')}
          >
            Products
          </CustomButton>
        </Link>

        <CustomButton
          color="secondary"
          className="mb-2"
          onPress={() => router.push('/profile')}
        >
          Profile
        </CustomButton>

        <CustomButton
          color="tertiary"
          className="mb-2"
          onPress={() => router.push('/settings')}
        >
          Settings
        </CustomButton>
        <CustomButton
          color="primary"
          className="mb-2"
          onPress={onToggleDrawer}
        >
          Open Menu
        </CustomButton>

        {/* <Link href="/products" className="text-blue-600 mb-5">
          Products
        </Link>
        <Link href="/profile" className="text-blue-600 mb-5">
          Profile
        </Link>
        <Link href="/settings" className="text-blue-600 mb-5">
          Settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
