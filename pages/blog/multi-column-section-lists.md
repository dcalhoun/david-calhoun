---
description: "Composing React Native FlatList and SectionList for multi-column virtual list layouts."
date: "2023-01-10"
title: "Multi-Column SectionLists"
---

React Native’s `FlatList` provides a useful `numColumns` prop to display items across multiple columns. However, the sibling `SectionList` component does not support the `numColumns` prop.

Whenever one needs both section headers and a multi-column layout for a virtual list, composing `FlatList` and `SectionList` together is the [recommended approach](https://github.com/facebook/react-native/issues/13192#issuecomment-362681029).

```js
import { FlatList, SectionList } from "react-native";

const sections = [
  { title: "Fruits", data: ["Apple", "Banana", "Orange"] },
  { title: "Vegetables", data: ["Carrot", "Potato"] },
];

function MultiColumnSectionList() {
  const renderItem = ({ data }) => {
    return <FlatList data={data} numColumns={3} />;
  };

  return <SectionList sections={sections} renderItem={renderItem} />;
}
```

The performance optimizations provided by React Native's virtual list components apply to nested lists as well. One can follow general [React](https://reactjs.org/docs/optimizing-performance.html) and [React Native](https://reactnative.dev/docs/performance) performance best practices to achieve good performance, e.g. limiting unnecessary re-renders for complex components.
