import * as React from "react";
import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  Image,
  Circle,
  G,
  ClipPath,
  Rect,
} from "react-native-svg";
import theme from "../../app/theme";

const ProfileIcon = (props) => (
  <Svg
    width="28"
    height="27"
    viewBox="0 0 28 27"
    fill={
      props.color === theme.colors.primaryContainer
        ? theme.colors.primaryContainer
        : "#ffffff"
    }
    stroke={props.color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clip-path="url(#clip0_1110_1809)">
      <Path
        d="M23.1593 23.5589C22.5895 21.9641 21.3341 20.5549 19.5876 19.5499C17.8412 18.5448 15.7013 18 13.5 18C11.2987 18 9.15883 18.5448 7.41239 19.5498C5.66595 20.5549 4.41049 21.9641 3.84074 23.5589"
        stroke="#96A0B5"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Circle
        cx="13.5"
        cy="9"
        r="5"
        stroke="#96A0B5"
        stroke-width="2"
        stroke-linecap="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1110_1809">
        <Rect width="27" height="27" fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ProfileIcon;
