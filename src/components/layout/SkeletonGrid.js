// src/components/layout/SkeletonGrid.js
import React from "react";
import { View } from "react-native";
import BaseSkeleton from "../core/BaseSkeleton";

export const SkeletonGrid = ({
  columns = 2,
  itemHeight = 150,
  spacing = 10,
  itemWidth = "45%",
  ...props
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {[...Array(columns * 2)].map((_, index) => (
        <BaseSkeleton
          key={index}
          width={itemWidth}
          height={itemHeight}
          style={{
            marginBottom: spacing,
            alignSelf: "center",
          }}
          {...props}
        />
      ))}
    </View>
  );
};
