import { View } from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View className="flex items-center justify-center h-full">
      <View className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent rounded-full border-blue-600"></View>
    </View>
  );
};

export default Loader;
