import bgDesktopDark from '../../assets/images/bg-desktop-dark.jpg';
import bgDesktopLight from '../../assets/images/bg-desktop-light.jpg';

export const lightStyles ={  
  Very_Light_Gray: "hsl(0, 0%, 98%)",
  Very_Light_Grayish_Blue: "hsl(236, 33%, 92%)",
  Light_Grayish_Blue: "hsl(233, 11%, 84%)",
  Dark_Grayish_Blue: "hsl(236, 9%, 61%)",
  Very_Dark_Grayish_Blue: "hsl(235, 19%, 35%)"
}

export const darkStyles = {
  Very_Dark_Blue: "hsl(235, 21%, 11%)",
  Very_Dark_Desaturated_Blue: "hsl(235, 24%, 19%)",
  Light_Grayish_Blue: "hsl(234, 39%, 85%)",
  Light_Grayish_Blue_hover: "hsl(236, 33%, 92%)", // hover
  Dark_Grayish_Blue: "hsl(234, 11%, 52%)",
  Very_Dark_Grayish_Blue: "hsl(233, 14%, 35%)",
  // Very_Dark_Grayish_Blue: "hsl(237, 14%, 26%)"
}

export const lightTheme = {
  bg_primary: lightStyles.Very_Light_Gray,
  bg_secondary: lightStyles.Very_Light_Gray,
  text_primary: lightStyles.Very_Dark_Grayish_Blue,
  text_secondary: darkStyles.Light_Grayish_Blue,
  text_gray: lightStyles.Dark_Grayish_Blue,
  text_gray_hover: lightStyles.Very_Dark_Grayish_Blue,
  background: `url(${bgDesktopLight})`
}

export const darkTheme = {
  bg_primary: darkStyles.Very_Dark_Blue,
  bg_secondary: darkStyles.Very_Dark_Desaturated_Blue,
  text_primary: darkStyles.Light_Grayish_Blue,
  text_secondary: lightStyles.Very_Dark_Grayish_Blue,
  text_gray: lightStyles.Dark_Grayish_Blue,
  text_gray_hover: darkStyles.Light_Grayish_Blue_hover,
  background: `url(${bgDesktopDark})`
}