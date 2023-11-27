import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../config';
import {fonts} from '../config/Constants';

export default StyleSheet.create({
  title: {
    fontFamily: fonts.SemiBold,
    marginVertical: Metrix.VerticalSize(20),
    fontSize: Metrix.customFontSize(24),
  },
  description: {
    fontFamily: fonts.Regular,
    lineHeight: Metrix.VerticalSize(20),
    color: Colors.textLightColor,
    marginBottom: Metrix.VerticalSize(20),
    fontSize: Metrix.customFontSize(10),
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  statusCardStyle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(5),
    marginTop: Metrix.VerticalSize(5),
    backgroundColor: Colors.successBg,
    borderRadius: 2,
  },
  status: {
    color: Colors.successColor,
    fontFamily: fonts.Bold,
    fontSize: Metrix.customFontSize(10),
  },
  selectable: {
    marginVertical: Metrix.VerticalSize(5),
    width: '100%',
    justifyContent: 'center',
    height: Metrix.VerticalSize(44),
    paddingHorizontal: Metrix.HorizontalSize(10),
    color: Colors.black,
    borderRadius: 8,
    borderColor: Colors.lighGray,
    borderWidth: 1,
  },
  selectableText: {
    fontSize: Metrix.customFontSize(12),
    color: Colors.secondary,
  },
  shadowContainer: {
    padding: 10,
    width: '100%',
    // shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.white,
    // backgroundColor: 'red',
    marginVertical: Metrix.VerticalSize(5),
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  identityContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Metrix.HorizontalSize(200),
    height: Metrix.VerticalSize(100),
    resizeMode: 'contain',
  },
  identityHeading: {
    fontFamily: fonts.Black,
    color: Colors.white,
    marginVertical: Metrix.VerticalSize(20),
    fontSize: Metrix.customFontSize(22),
    textAlign: 'center',
  },
  subHeading: {
    color: Colors.white,
    fontFamily: fonts.Regular,
    textAlign: 'center',
    marginHorizontal: Metrix.HorizontalSize(30),
    fontSize: Metrix.customFontSize(12),
  },
  buttonStyle: {
    backgroundColor: Colors.white,
    width: '90%',
    alignSelf: 'center',
    marginTop: Metrix.VerticalSize(20),
  },
});
