# 💀 rn-skeletons

A powerful, highly customizable skeleton loading library for React Native applications.

## 📸 Preview

<div style="display: flex; justify-content: space-around;">
  <img src="https://example.com/skeleton-text.gif" width="200" alt="Text Skeleton" />
  <img src="https://example.com/skeleton-image.gif" width="200" alt="Image Skeleton" />
  <img src="https://example.com/skeleton-carousel.gif" width="200" alt="Carousel Skeleton" />
</div>

## 🚀 Features

- 🎨 Fully Customizable Components
- 🔬 Multiple Skeleton Types
- 🌈 Advanced Animation Options
- 📱 Responsive Design
- ♿ Accessibility Support
- 💨 Lightweight & Performance-Optimized
- 🌓 Dark/Light Mode Compatible
- 🔄 Multiple Animation Types

## 📦 Installation

```bash
npm install rn-skeletons
# or
yarn add rn-skeletons
# or
pnpm add rn-skeletons
```

## 🛠 Basic Usage

```jsx
import React from "react";
import { SkeletonText, SkeletonImage, SkeletonButton } from "rn-skeletons";

function LoadingScreen() {
  return (
    <View>
      <SkeletonText lines={3} lineHeight={20} spacing={10} />

      <SkeletonImage width={200} height={200} borderRadius={10} />

      <SkeletonButton width="100%" height={50} />
    </View>
  );
}
```

## 🌈 Comprehensive Component List

### 1. Base Skeleton Props

Common props for all skeleton components:

| Prop              | Type                                 | Default     | Description             |
| ----------------- | ------------------------------------ | ----------- | ----------------------- |
| `width`           | `number\|string`                     | `'100%'`    | Width of skeleton       |
| `height`          | `number`                             | `50`        | Height of skeleton      |
| `backgroundColor` | `string`                             | `'#E1E9EE'` | Background color        |
| `highlightColor`  | `string`                             | `'#F2F8FC'` | Shimmer color           |
| `borderRadius`    | `number`                             | `4`         | Corner radius           |
| `animationType`   | `'shimmer'\|'pulse'\|'fade'\|'none'` | `'shimmer'` | Animation style         |
| `duration`        | `number`                             | `1500`      | Animation duration (ms) |
| `style`           | `ViewStyle`                          | `{}`        | Additional styles       |
| `testID`          | `string`                             | `undefined` | Test identifier         |

### 2. Text Skeleton

Create multi-line text placeholders

#### Text Skeleton Props

| Prop         | Type             | Default  | Description            |
| ------------ | ---------------- | -------- | ---------------------- |
| `lines`      | `number`         | `1`      | Number of text lines   |
| `lineHeight` | `number`         | `20`     | Height of each line    |
| `spacing`    | `number`         | `10`     | Space between lines    |
| `width`      | `number\|string` | `'100%'` | Width of text skeleton |

```jsx
<SkeletonText
  lines={3} // Number of lines
  lineHeight={20} // Height of each line
  spacing={10} // Space between lines
  width="90%" // Width of text
  backgroundColor="#F0F0F0"
/>
```

### 3. Image Skeleton

Placeholder for images

#### Image Skeleton Props

| Prop           | Type     | Default | Description   |
| -------------- | -------- | ------- | ------------- |
| `width`        | `number` | `200`   | Image width   |
| `height`       | `number` | `200`   | Image height  |
| `borderRadius` | `number` | `10`    | Corner radius |

```jsx
<SkeletonImage
  width={200} // Image width
  height={200} // Image height
  borderRadius={10} // Corner radius
  animationType="pulse"
/>
```

### 4. Button Skeleton

Placeholder for buttons

#### Button Skeleton Props

| Prop           | Type             | Default  | Description   |
| -------------- | ---------------- | -------- | ------------- |
| `width`        | `number\|string` | `'100%'` | Button width  |
| `height`       | `number`         | `50`     | Button height |
| `borderRadius` | `number`         | `8`      | Corner radius |

```jsx
<SkeletonButton
  width="100%" // Button width
  height={50} // Button height
  borderRadius={8} // Corner radius
  backgroundColor="#E0E0E0"
/>
```

### 5. Carousel Skeleton

Horizontal/vertical carousel loader

#### Carousel Skeleton Props

| Prop         | Type      | Default | Description         |
| ------------ | --------- | ------- | ------------------- |
| `itemCount`  | `number`  | `3`     | Number of items     |
| `itemWidth`  | `number`  | `200`   | Item width          |
| `itemHeight` | `number`  | `150`   | Item height         |
| `horizontal` | `boolean` | `true`  | Scroll direction    |
| `spacing`    | `number`  | `10`    | Space between items |

```jsx
<SkeletonCarousel
  itemCount={3} // Number of items
  itemWidth={200} // Item width
  itemHeight={150} // Item height
  horizontal={true} // Scroll direction
  spacing={10} // Space between items
/>
```

### 6. Review Skeleton

Review card placeholder

#### Review Skeleton Props

| Prop         | Type     | Default | Description          |
| ------------ | -------- | ------- | -------------------- |
| `avatarSize` | `number` | `50`    | Size of avatar       |
| `textLines`  | `number` | `2`     | Number of text lines |

```jsx
<SkeletonReview
  avatarSize={50} // Avatar size
  textLines={2} // Text lines
  backgroundColor="#F5F5F5"
/>
```

### 7. Grid Skeleton

Grid-based layout skeleton

#### Grid Skeleton Props

| Prop         | Type             | Default | Description         |
| ------------ | ---------------- | ------- | ------------------- |
| `columns`    | `number`         | `2`     | Number of columns   |
| `itemHeight` | `number`         | `150`   | Item height         |
| `spacing`    | `number`         | `10`    | Space between items |
| `itemWidth`  | `number\|string` | `'45%'` | Width of each item  |

```jsx
<SkeletonGrid
  columns={2} // Number of columns
  itemHeight={150} // Item height
  spacing={10} // Space between items
  itemWidth="45%" // Width of grid items
/>
```

### 8. List Skeleton

List-based skeleton loader

#### List Skeleton Props

| Prop         | Type     | Default | Description         |
| ------------ | -------- | ------- | ------------------- |
| `itemCount`  | `number` | `5`     | Number of items     |
| `itemHeight` | `number` | `80`    | Height of each item |
| `spacing`    | `number` | `10`    | Space between items |

```jsx
<SkeletonList
  itemCount={5} // Number of items
  itemHeight={80} // Item height
  spacing={10} // Space between items
/>
```

## 🎨 Advanced Customization

### Animation Control

Customize animation for each skeleton:

```jsx
<SkeletonText
  animationType="pulse" // Options: shimmer, pulse, fade, none
  duration={1500} // Animation duration in ms
  highlightColor="#E0E0E0"
/>
```

## 🌐 Responsive Design

Support for dynamic sizing:

```jsx
<SkeletonText
  width="90%" // Percentage width
  lineHeight={20} // Fixed line height
/>
```

## 🚀 Performance Optimization

- Minimal render overhead
- Native animation driver
- Lightweight implementation
- Efficient memory management

## 🔧 Troubleshooting

- Ensure correct package installation
- Check React Native version compatibility
- Verify import statements

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📄 License

MIT License

## 📞 Contact

[Your Name/Organization]

- GitHub: [@abahadmagsi](https://github.com/abahadmagsi)
- Twitter: [@thisisahadmagsi](https://twitter.com/thisisahadmagsi)

---

⭐ Star the project if you find it helpful!
