// src/components/specialized/SkeletonCarousel.js
import React from "react";
import { View, ScrollView } from "react-native";
import BaseSkeleton from "../core/BaseSkeleton";

export const SkeletonCarousel = ({
  itemCount = 3,
  itemWidth = 200,
  itemHeight = 150,
  spacing = 10,
  horizontal = true,
  ...props
}) => {
  return (
    <ScrollView horizontal={horizontal} showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: horizontal ? "row" : "column" }}>
        {[...Array(itemCount)].map((_, index) => (
          <BaseSkeleton
            key={index}
            width={itemWidth}
            height={itemHeight}
            style={{
              marginRight: horizontal ? spacing : 0,
              marginBottom: !horizontal ? spacing : 0,
            }}
            {...props}
          />
        ))}
      </View>
    </ScrollView>
  );
};
