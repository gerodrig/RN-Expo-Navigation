import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import CustomButton from '@/components/shared/CustomButton';

const HomeScreen = () => {
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
