// src/components/specialized/SkeletonReview.js
import React from "react";
import { View } from "react-native";
import BaseSkeleton from "../core/BaseSkeleton";

export const SkeletonReview = ({
  avatarSize = 50,
  textLines = 2,
  ...props
}) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <BaseSkeleton
        width={avatarSize}
        height={avatarSize}
        borderRadius={avatarSize / 2}
        style={{ marginRight: 10 }}
        {...props}
      />
      <View style={{ flex: 1 }}>
        <SkeletonText lines={textLines} {...props} />
      </View>
    </View>
  );
};
