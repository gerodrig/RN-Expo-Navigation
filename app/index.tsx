import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect } from 'expo-router';

const App = () => {
    return <Redirect href='/drawer' />
//   return (
//     <SafeAreaView>
//       <View className="mt-6 mx-2.5">
//         <Text className="text-3xl text-primary" style={{fontFamily: 'HackNerdFontMono-Bold'}}>Hello Benito</Text>
//         <Text className="text-2xl font-hack-bold text-secondary-400">Hello Benito</Text>
//         <Text className="text-xl font-hack-regular text-tertiary-400">Hello Benito</Text>

//         <Link href="/products" className="text-blue-600">Products</Link>
//       </View>
//     </SafeAreaView>
//   );
};

export default App;
