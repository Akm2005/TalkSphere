import React from 'react';
import { View, Text } from 'react-native';
import Footer from './Footer'; // Assuming Footer.js is in the same directory

const Call = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Call Screen Content</Text>
      </View>
      <Footer />
    </View>
  );
};

export default Call;
