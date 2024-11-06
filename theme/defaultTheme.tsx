import {Dimensions} from 'react-native';

const colors = {
  primary: '#7dcd8c',
  emphasize: '#e9702b',
};

const fontWeight = {
  Light: 300,
  Regular: 400,
  Bold: 700,
  ExtraBold: 800,
};

const fontFamily = {
  Light: 'Roboto-Light',
  Regular: 'Roboto-Regular',
  Bold: 'Roboto-Bold',
  ExtraBold: 'NanumSquareRoundEB',
};

const basicDimensions = {
  height: 760,
  width: 360,
};

const height = // 높이 변환 작업
  (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2);

const width = // 가로 변환 작업
  (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2);

export const FooterHeight = parseFloat(height) * 75;
export const HeaderHeight = parseFloat(height) * 44;

const defaultTheme = {
  colors: colors,
  fontWeight: fontWeight,
  fontFamily: fontFamily,
  width: parseFloat(width),
  height: parseFloat(height),
};

export default defaultTheme;
