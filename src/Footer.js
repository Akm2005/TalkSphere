import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Home as HomeIcon, BookOpen, Phone, Users } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const activeColor = "#f57df1";
  const inactiveColor = "#888888";

  const isActive = (routeName) => {
    return route.name === routeName;
  };

  const getColor = (routeName) => {
    return isActive(routeName) ? activeColor : inactiveColor;
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
        <HomeIcon color={getColor('Home')} size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Story')}>
        <BookOpen color={getColor('Story')} size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Call')}>
        <Phone color={getColor('Call')} size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Group')}>
        <Users color={getColor('Group')} size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default Footer;
