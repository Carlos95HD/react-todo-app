import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled-components/GlobalStyles/Themes";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles } from "./styled-components/GlobalStyles/GlobalStyles";
import Toggle from "./styled-components/Layout/Toggler";
import { TasksList } from "./components/TasksList";
import { AddTasks } from "./components/AddTasks";
import { Header, Title } from "./styled-components/Layout/Header";
import { CountriesProvider } from "./todo/TodoContext";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  if (!mountedComponent) return <div />;

  return (
    <CountriesProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  
          <GlobalStyles />
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

      </ThemeProvider>
    </CountriesProvider>
  );
};
export default App;
