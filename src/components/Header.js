import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Images, Metrix, NavigationService } from '../config';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ title, show }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: !show ? Metrix.HorizontalSize(250) : '100%', flexDirection: !show ? 'row' : '', justifyContent: !show ? 'space-between' : 'center', alignItems: 'center' }}>
        {!show ?
          <TouchableOpacity onPress={() => NavigationService.goBack()}>
            <Image source={Images.logoWhite} style={{ width: 40, height: 40 }} resizeMode='contain' />
          </TouchableOpacity>
          : null}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:
      Platform.OS == 'android'
        ? Metrix.VerticalSize(100)
        : Metrix.VerticalSize(120),
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrix.HorizontalSize(6),
    paddingTop: Metrix.HorizontalSize(34),
    alignItems: 'center',
  },

  title: {
    // top: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;