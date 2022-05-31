import bgDesktopDark from '../../assets/images/bg-desktop-dark.jpg';
import bgDesktopLight from '../../assets/images/bg-desktop-light.jpg';

export const lightTheme = {
  body: "hsl(0, 0%, 98%)",
  text: '#363537',
  toggleBorder: '#FFF',
  background: `url(${bgDesktopLight})`
}

export const darkTheme = {
  body:'hsl(235, 21%, 11%)',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: `url(${bgDesktopDark})`
}