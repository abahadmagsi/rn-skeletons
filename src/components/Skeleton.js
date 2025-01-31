import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

const Skeleton = ({
  width = 200,
  height = 20,
  backgroundColor = "#E1E9EE",
  highlightColor = "#F2F8FC",
  duration = 1000,
  shape = "rectangle", // rectangle, circle, square
  style,
  isAnimated = true,
  borderRadius,
  children,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isAnimated) {
      Animated.loop(
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
      ).start();
    }
  }, [isAnimated, duration]);

  const getShapeStyle = () => {
    switch (shape) {
      case "circle":
        return {
          width: width,
          height: width,
          borderRadius: width / 2,
        };
      case "square":
        return {
          width: width,
          height: width,
          borderRadius: borderRadius || 0,
        };
      default:
        return {
          width: width,
          height: height,
          borderRadius: borderRadius || 4,
        };
    }
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  const shimmerStyle = {
    transform: [{ translateX }],
  };

  return (
    <View
      style={[styles.container, getShapeStyle(), style, { backgroundColor }]}
    >
      {isAnimated && (
        <Animated.View
          style={[
            styles.shimmer,
            shimmerStyle,
            {
              backgroundColor: highlightColor,
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
  },
  shimmer: {
    width: "100%",
    height: "100%",
    opacity: 0.4,
  },
});

export default Skeleton;
