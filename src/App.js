import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled-components/GlobalStyles/Themes";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles } from "./styled-components/GlobalStyles/GlobalStyles";
import styled from "styled-components";
import Toggle from "./styled-components/Layout/Toggler";
import { Title } from "./styled-components/Layout/TItle";

const Header = styled.div`
  background-image: ${({ theme }) => theme.background};
  background-size: cover;
  height: 100%;
  text-align: center;
  width: 100%;
  transition: background-image 0.5s linear;
`;

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header>
          <Title />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </Header>
      </>
    </ThemeProvider>
  );
};
export default App;
