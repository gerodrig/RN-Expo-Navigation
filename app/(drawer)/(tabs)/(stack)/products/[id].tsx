import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { products } from '@/store/products.store';

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Product',
    });
  }, []);

  if (!product) {
    return <Redirect href="/products" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="font-hack-bold text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-hack-bold">$ {product.price}</Text>
    </View>
  );
};

export default ProductScreen;
