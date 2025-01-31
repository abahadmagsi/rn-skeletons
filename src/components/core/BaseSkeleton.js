import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

const BaseSkeleton = ({
  width = "100%",
  height = 50,
  backgroundColor = "#E1E9EE",
  highlightColor = "#F2F8FC",
  borderRadius = 4,
  duration = 1500,
  style,
  children,
  animationType = "shimmer", // shimmer, pulse, fade
  direction = "right", // right, left, top, bottom
  intensity = 0.5,
  ...props
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Shimmer Animation
  const createShimmerAnimation = () => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    );
  };

  // Pulse Animation
  const createPulseAnimation = () => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    );
  };

  // Fade Animation
  const createFadeAnimation = () => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    );
  };

  useEffect(() => {
    let animation;
    switch (animationType) {
      case "shimmer":
        animation = createShimmerAnimation();
        break;
      case "pulse":
        animation = createPulseAnimation();
        break;
      case "fade":
        animation = createFadeAnimation();
        break;
      default:
        animation = createShimmerAnimation();
    }

    animation.start();
    return () => animation.stop();
  }, [animationType, duration]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.5, 1, 0.5],
  });

  const containerStyle = [
    styles.container,
    {
      width,
      height,
      backgroundColor,
      borderRadius,
    },
    style,
  ];

  const animatedStyle = {
    ...(animationType === "shimmer" && {
      transform: [{ translateX }],
    }),
    ...(animationType === "fade" && { opacity }),
  };

  return (
    <View style={containerStyle} {...props}>
      {animationType !== "none" && (
        <Animated.View
          style={[
            styles.shimmer,
            {
              backgroundColor: highlightColor,
              ...animatedStyle,
            },
          ]}
        />
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    justifyContent: "center",
  },
  shimmer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
});

export default BaseSkeleton;
