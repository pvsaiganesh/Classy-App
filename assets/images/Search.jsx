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

const SearchIcon = (props) => (
  <Svg
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill={
      props.color === theme.colors.primaryContainer
        ? theme.colors.primaryContainer
        : "#ffffff"
    }
    stroke={props.color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle
      cx="12.9983"
      cy="12.7474"
      r="9.73761"
      stroke="#6D7D93"
      strokeWidth="1.72"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity="0.6"
      d="M19.7715 20.0256L23.5892 23.8334"
      stroke="#6D7D93"
      strokeWidth="1.72"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SearchIcon;
