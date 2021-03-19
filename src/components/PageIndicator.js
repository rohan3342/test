import React from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';

const PageIndicator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.DotContainer}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const backgroundCheck = scrollX.interpolate({
          inputRange,
          outputRange: ['#fff', '#2D475C', '#fff'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.dot, { backgroundColor: backgroundCheck }]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  DotContainer: {
    flexDirection: 'row',
    height: 100,
  },
  dot: {
    height: 40,
    borderRadius: 20,
    borderColor: '#2D475C',
    borderWidth: 3,
    marginHorizontal: 8,
    width: 40,
  },
});

export default PageIndicator;
