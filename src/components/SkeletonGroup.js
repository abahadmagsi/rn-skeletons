import React from "react";
import { View, StyleSheet } from "react-native";
import Skeleton from "./Skeleton";

const SkeletonGroup = ({
  count = 1,
  spacing = 8,
  direction = "vertical",
  containerStyle,
  skeletonProps,
}) => {
  const skeletons = Array(count)
    .fill(0)
    .map((_, index) => (
      <Skeleton
        key={index}
        {...skeletonProps}
        style={[
          skeletonProps?.style,
          index !== count - 1 && {
            marginBottom: direction === "vertical" ? spacing : 0,
            marginRight: direction === "horizontal" ? spacing : 0,
          },
        ]}
      />
    ));

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: direction === "horizontal" ? "row" : "column",
        },
        containerStyle,
      ]}
    >
      {skeletons}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});

export default SkeletonGroup;
