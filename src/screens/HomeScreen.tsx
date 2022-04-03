import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

interface MenuItem {
  name: string;
  icon: string;
  component: string;
}
