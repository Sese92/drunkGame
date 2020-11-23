import React from 'react';
import Svg, { Circle, G, Path, Use, Defs } from 'react-native-svg';
import { useTheme } from '@react-navigation/native';

// original Widht and Height
const oW = 30;
const oH = 30;
const aspectRatio = oW / oH;

export const IconCards = ({
  unique,
  width,
  height,
  background,
  iconBackgroundColor,
  iconStrokeColor,
  iconLineColor,
}) => {
  const uniqueKey = unique;
  const a = uniqueKey + '_cards_b';
  const { colors } = useTheme();
  let fheight = height;
  let fwidth = width;
  if (!height) {
    fheight = width ? width * aspectRatio : oH;
  }
  if (!width) {
    fwidth = height ? height * aspectRatio : oW;
  }

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMin"
      width={fwidth}
      height={fheight}
      viewBox="2 0 24 24">
      <Defs>
        <Path
          id={a}
          fill={iconLineColor || colors.primary}
          d="M18.378,1.062H3.855c-0.309,0-0.559,0.25-0.559,0.559c0,0.309,0.25,0.559,0.559,0.559h13.964v13.964
          c0,0.309,0.25,0.559,0.559,0.559c0.31,0,0.56-0.25,0.56-0.559V1.621C18.938,1.312,18.688,1.062,18.378,1.062z M16.144,3.296H1.621
          c-0.309,0-0.559,0.25-0.559,0.559v14.523c0,0.31,0.25,0.56,0.559,0.56h14.523c0.309,0,0.559-0.25,0.559-0.56V3.855
          C16.702,3.546,16.452,3.296,16.144,3.296z M15.586,17.262c0,0.31-0.25,0.558-0.56,0.558H2.738c-0.309,0-0.559-0.248-0.559-0.558
          V4.972c0-0.309,0.25-0.559,0.559-0.559h12.289c0.31,0,0.56,0.25,0.56,0.559V17.262z"
        />
      </Defs>
      <G>
        {background ? (
          <Circle
            cx="12"
            cy="12"
            r="11"
            stroke={iconStrokeColor || colors.primary}
            fill={iconBackgroundColor || colors.secondary}
            strokeWidth="2%"
          />
        ) : null}
        <G
          fill="none"
          fillRule="evenodd"
          transform={
            background ? 'translate(7,7)scale(0.5)' : 'translate(4 3)'
          }>
          <Use xlinkHref={`#${a}`} />
        </G>
      </G>
    </Svg>
  );
};
