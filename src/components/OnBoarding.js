import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';
import OnBoardingItem from './OnBoardingItem';
import PageIndicator from './PageIndicator';
import DATA from '../utils/onBoardingData';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const onboardingSlideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          horizontal
          data={DATA}
          pagingEnabled
          bounces={false}
          ref={onboardingSlideRef}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={viewableItemsChanged}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
        />
      </View>

      <PageIndicator data={DATA} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistContainer: {
    flex: 3,
  },
});

export default Onboarding;
