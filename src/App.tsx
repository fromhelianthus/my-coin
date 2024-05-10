import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { lightTheme, darkTheme } from "./theme";
import { IconButton } from '@material-ui/core';
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@material-ui/icons';

function App() {

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  const buttonText = currentTheme === lightTheme ? "to dark" : "to light";

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
      <div className="theme-toggle-button-wrapper">
        <IconButton className="theme-toggle-button" onClick={toggleTheme}>
          {currentTheme === lightTheme ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
