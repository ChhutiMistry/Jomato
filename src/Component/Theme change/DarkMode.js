import React from 'react';
import {ThemeProvider} from 'styled-components';
import  {useDarkMode} from './useDarkMode'
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from './Themes';
import Toggle from './Toggler';

const DarkMode = () => {
     const [theme, themeToggler] = useDarkMode();
     const themeMode = theme === 'light' ? lightTheme : darkTheme;
     return (
     <ThemeProvider theme={themeMode}>
          <>
               <GlobalStyles/>
               <div className='App'>
                    <Toggle theme={theme} toggleTheme={themeToggler} />
               </div>
          </>
     </ThemeProvider>
     );
};

export default DarkMode;