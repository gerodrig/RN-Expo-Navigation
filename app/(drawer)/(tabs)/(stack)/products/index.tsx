import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { products } from '@/store/products.store';
import { Link } from 'expo-router';

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-hack-bold">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex flex-row justify-between">
              <Text className="font-hack-bold">${item.price}</Text>
              <Link
                href={`/products/${item.id}`}
                className="text-secondary"
              >
                See details
              </Link>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductsScreen;
