import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';

export const FlatListMenuItem = ({ menuItem }: FlatListMenuItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="grey" size={23} />
        <Text style={styles.itemText}>
          {menuItem.name} - {menuItem.icon}
        </Text>
        <View style={styles.spacer} />
        <Icon name="chevron-forward-outline" color="grey" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  spacer: {
    flex: 1,
  },
  itemText: {
    fontSize: 19,
    marginLeft: 10,
  },
});

interface FlatListMenuItemProps {
  menuItem: MenuItem;
}
