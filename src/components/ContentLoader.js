import React from "react";
import { View, StyleSheet } from "react-native";
import Skeleton from "./Skeleton";

const ContentLoader = ({
  avatar = true,
  lines = 3,
  containerStyle,
  avatarSize = 60,
  lineHeight = 15,
  lineSpacing = 8,
  avatarStyle,
  lineStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {avatar && (
        <Skeleton
          width={avatarSize}
          height={avatarSize}
          shape="circle"
          style={[styles.avatar, avatarStyle]}
        />
      )}
      <View style={styles.content}>
        {Array(lines)
          .fill(0)
          .map((_, index) => (
            <Skeleton
              key={index}
              height={lineHeight}
              width={`${Math.random() * 30 + 70}%`}
              style={[
                index !== lines - 1 && { marginBottom: lineSpacing },
                lineStyle,
              ]}
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
  },
  avatar: {
    marginRight: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ContentLoader;
