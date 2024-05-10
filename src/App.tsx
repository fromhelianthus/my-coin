import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { lightTheme, darkTheme } from "./theme";
import { IconButton } from "@material-ui/core";
import { Brightness2Rounded as DarkModeIcon, Brightness5Rounded as LightModeIcon } from '@material-ui/icons';

function App() {

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
      <div className="theme-toggle-button-wrapper">
        <IconButton onClick={toggleTheme}>
          {currentTheme === lightTheme ? <DarkModeIcon style={{ color: "091E42" }} /> : <LightModeIcon style={{ color: "#DEE4EA" }} />}
        </IconButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
