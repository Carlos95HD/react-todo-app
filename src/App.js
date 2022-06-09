import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled-components/GlobalStyles/Themes";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles } from "./styled-components/GlobalStyles/GlobalStyles";
import Toggle from "./styled-components/Layout/Toggler";
import { TasksList } from "./components/Todo/TasksList";
import { AddTasks } from "./components/Todo/AddTasks";
import { Header, Title } from "./styled-components/Layout/Header";
import { CountriesProvider } from "./context/todo/TodoContext";
import styled from "styled-components";
import { Footer } from "./components/Footer";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  if (!mountedComponent) return <div />;

  return (
    <CountriesProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  
          <GlobalStyles />
          <Container>
            <Header>
              <Title>
                <h1>TODO</h1>
                <Toggle theme={theme} toggleTheme={themeToggler} />
              </Title>
              {/* input to add todo */}
              <AddTasks />
            </Header>
            {/* TasksList */}
            <TasksList />
          </Container>
          <Footer />

      </ThemeProvider>
    </CountriesProvider>
  );
};
export default App;

const Container = styled.div`
  min-height: 97vh;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`