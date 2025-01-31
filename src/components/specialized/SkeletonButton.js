// src/components/specialized/SkeletonButton.js
import React from "react";
import BaseSkeleton from "../core/BaseSkeleton";

export const SkeletonButton = ({
  width = "100%",
  height = 50,
  borderRadius = 8,
  ...props
}) => {
  return (
    <BaseSkeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...props}
    />
  );
};
