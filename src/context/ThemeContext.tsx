import React, { createContext, useContext, useState } from 'react';
import '../assets/styles/light.scss';
import '../assets/styles/dark.scss';

type Theme = 'light' | 'dark';

interface ThemeContextType {
theme: Theme;
setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
theme: 'light',
setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
const [theme, setTheme] = useState<Theme>('light');

    return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`theme-${theme}`}>
    {children}
    </div>
    </ThemeContext.Provider>
    );
};

export default ThemeProvider;