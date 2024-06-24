import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2024 Little Lemon. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
  },
});

