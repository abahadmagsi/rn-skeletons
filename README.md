# rn-skeletons 💀📱

# REACT NAITVE SKELETONS

[![npm version](https://img.shields.io/npm/v/rn-skeletons.svg)](https://www.npmjs.com/package/rn-skeletons)
[![Downloads](https://img.shields.io/npm/dm/rn-skeletons.svg)](https://www.npmjs.com/package/rn-skeletons)
[![License](https://img.shields.io/npm/l/rn-skeletons.svg)](https://github.com/yourusername/rn-skeletons/blob/main/LICENSE)

A lightweight, highly customizable React Native skeleton loading library for creating beautiful loading states in mobile applications.

## ✨ Features

- 🚀 Lightweight and zero dependencies
- 🎨 Fully customizable skeleton components
- 📱 100% React Native compatibility
- 🔄 Smooth shimmer animations
- 💪 TypeScript support
- 🌈 Multiple shape and styling options

## 📦 Installation

```bash
npm install rn-skeletons
# or
yarn add rn-skeletons
```

## 🚀 Quick Start

```jsx
import React from "react";
import { View } from "react-native";
import { Skeleton, SkeletonGroup, ContentLoader } from "rn-skeletons";

function LoadingScreen() {
  return (
    <View>
      {/* Basic Skeleton */}
      <Skeleton width={200} height={20} backgroundColor="#E1E9EE" />

      {/* Skeleton Group */}
      <SkeletonGroup count={3} direction="vertical" spacing={10} />

      {/* Content Loader */}
      <ContentLoader avatar={true} lines={3} />
    </View>
  );
}
```

## 🎨 Components

### 1. Skeleton

The core component for creating individual skeleton loaders.

#### Props

- `width`: Width of the skeleton (default: 200)
- `height`: Height of the skeleton (default: 20)
- `backgroundColor`: Background color (default: '#E1E9EE')
- `highlightColor`: Shimmer highlight color (default: '#F2F8FC')
- `duration`: Animation duration (default: 1000ms)
- `shape`: Shape type ('rectangle', 'circle', 'square')
- `isAnimated`: Enable/disable animation (default: true)
- `borderRadius`: Custom border radius

#### Example

```jsx
<Skeleton width={100} height={100} shape="circle" backgroundColor="#F0F0F0" />
```

### 2. SkeletonGroup

Create multiple skeletons with consistent spacing.

#### Props

- `count`: Number of skeletons (default: 1)
- `spacing`: Space between skeletons (default: 8)
- `direction`: Layout direction ('vertical' or 'horizontal')

#### Example

```jsx
<SkeletonGroup count={3} spacing={12} direction="horizontal" />
```

### 3. ContentLoader

A pre-configured skeleton loader for content with avatar and text lines.

#### Props

- `avatar`: Show/hide avatar skeleton (default: true)
- `lines`: Number of text lines (default: 3)
- `avatarSize`: Size of avatar (default: 60)
- `lineHeight`: Height of each text line (default: 15)
- `lineSpacing`: Space between lines (default: 8)

#### Example

```jsx
<ContentLoader avatar={true} lines={2} avatarSize={50} />
```

## 🎭 Shapes and Customization

The library supports three shapes:

- `rectangle` (default)
- `circle`
- `square`

## 🚀 Performance

- Utilizes `Animated` API for smooth animations
- Minimal render overhead
- Configurable animation duration
- Native driver support

## 🔧 Advanced Customization

Combine components and customize as needed:

```jsx
function ProfileSkeleton() {
  return (
    <View style={styles.container}>
      <ContentLoader avatar={true} lines={2} avatarSize={70} lineSpacing={10} />
    </View>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Please submit pull requests or open issues on our GitHub repository.

## 📄 License

MIT © ahadmagsi

---

Crafted with ❤️ for React Native Developers
