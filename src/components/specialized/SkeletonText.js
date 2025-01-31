// src/components/specialized/SkeletonText.js
import React from "react";
import BaseSkeleton from "../core/BaseSkeleton";
import { View } from "react-native";

export const SkeletonText = ({
  lines = 1,
  lineHeight = 20,
  spacing = 10,
  width = "100%",
  ...props
}) => {
  return (
    <View>
      {[...Array(lines)].map((_, index) => (
        <BaseSkeleton
          key={index}
          height={lineHeight}
          width={
            typeof width === "number"
              ? width
              : `${
                  typeof width === "string"
                    ? width
                    : index === lines - 1
                    ? "60%"
                    : "100%"
                }`
          }
          style={index < lines - 1 ? { marginBottom: spacing } : {}}
          {...props}
        />
      ))}
    </View>
  );
};
