import { StyleSheet } from 'react-native';


export default Style = StyleSheet.create({
  large: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*20,
    textAlign: 'center'
  },
  small: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*15,
    textAlign: 'center'
  }
});
