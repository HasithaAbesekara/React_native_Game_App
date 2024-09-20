import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  WIDTH: width,
  HEIGHT: height,
  RESPONSIVE_HEIGHT: height / 812,
  RESPONSIVE_WIDTH: width / 375,
};
