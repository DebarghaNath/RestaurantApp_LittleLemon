import React from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const Slider = () => {
  const images = [
    require('./img/img1.png'),
    require('./img/img2.png'),
    require('./img/img3.png'),
    require('./img/img4.png'),
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View style={{ width: screenWidth }}>
            <Image source={item} style={{ width: '100%', height: '70%', resizeMode: 'cover' }} />
          </View>
        )}
        horizontal
        
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Slider;
