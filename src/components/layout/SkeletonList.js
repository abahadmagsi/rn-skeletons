// src/components/layout/SkeletonList.js
import React from "react";
import { FlatList } from "react-native";
import BaseSkeleton from "../core/BaseSkeleton";

export const SkeletonList = ({
  itemCount = 5,
  itemHeight = 80,
  spacing = 10,
  ...props
}) => {
  return (
    <FlatList
      data={[...Array(itemCount)]}
      renderItem={() => (
        <BaseSkeleton
          height={itemHeight}
          style={{ marginBottom: spacing }}
          {...props}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
