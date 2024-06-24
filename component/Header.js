import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Welcome to <Text style={styles.boldText}>Little Lemon</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.2,
    backgroundColor: '#F4CE14',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
