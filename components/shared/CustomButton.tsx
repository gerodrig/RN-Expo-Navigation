import { View, Text, Pressable, PressableProps } from 'react-native';
import React from 'react';

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'text-only';
  className?: string;
}

const CustomButton = React.forwardRef(
  (
    {
      children,
      color = 'primary',
      onPress,
      onLongPress,
      variant = 'contained',
      className,
    }: Props,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: 'bg-blue-600',
      secondary: 'bg-green-600',
      tertiary: 'bg-red-600',
    }[color];

    const textColor = {
      primary: 'text-blue-600',
      secondary: 'text-green-600',
      tertiary: 'text-red-600',
    }[color];

    if (variant === 'text-only') {
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className={`text-center ${textColor} font-hack-regular`}>
          {children}
        </Text>
      </Pressable>;
    }

    return (
      <Pressable
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center font-hack-regular">
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;
