import { StyleSheet, PixelRatio } from 'react-native';
import { Fonts } from '../utils/Fonts';

export default Style = StyleSheet.create({
  buttonText: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*15,
    color: '#000000'
  },
  button: {
    padding: 10,
    backgroundColor: '#EDB852',
    borderStyle: 'solid',
    marginBottom: 15,
  },
  iconButton: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    backgroundColor: '#EDB852',
    borderStyle: 'solid',
    marginBottom: 15,
  },
  large: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*20,
    textAlign: 'center',
    color: '#EDB852',
    paddingBottom: 20,
  },
  small: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*15,
    textAlign: 'center',
    color: '#EDB852',
    paddingBottom: 15,
  },
  input: {
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*17.5,
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 15,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13181B',
  },
  backgroundTest: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#13181B',
  },
  listItem: {
    backgroundColor: '#13181B',
    textAlign: 'right',
    flexDirection: 'row',
    height: 110
  },
  listItemText:{
    fontFamily: Fonts.FrizQuadrataTTRegular,
    fontSize: PixelRatio.getFontScale()*20,
    color: '#EDB852',
    flex: 1
  },
  listItemImage: {
    width: 100,
    height: 100,
    margin: 5
  },
  abilityImage: {
    width: 50,
    height: 50,
    margin: 3
  },
  listItemBackground: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    marginTop: 50,
    width: 311,
    height: 220,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
