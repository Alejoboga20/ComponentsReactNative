/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import { FlatListMenuItem } from '../components/FlatListMenuItem';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={styles.title}>Menu Options</Text>
      </View>
    );
  };

  const renderItemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 2,
          opacity: 0.3,
          marginVertical: 8,
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={renderItemSeparator}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
