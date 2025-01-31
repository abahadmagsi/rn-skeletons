// src/components/specialized/SkeletonImage.js
import React from "react";
import BaseSkeleton from "../core/BaseSkeleton";

export const SkeletonImage = ({
  width = 200,
  height = 200,
  borderRadius = 10,
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
