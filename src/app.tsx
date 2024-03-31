import * as React from "react";
import { CssBaseline, useMediaQuery, ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components/header";
import { Route, Routes } from "react-router-dom";
import { About } from "./about";
import BusTimetable from "./bus";

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export const App = () => {
    const [mode, setMode] = React.useState<"light" | "dark">("dark");
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", { noSsr: true });

    // localStorageに保存されているならそれを使い、なければシステムの設定を使う
    React.useEffect(() => {
        if (localStorage.getItem("colorMode") === "dark") {
            setMode("dark");
        } else if (localStorage.getItem("colorMode") === "light") {
            setMode("light");
        } else if ((prefersDarkMode) === true) {
            setMode("dark");
        } else {
            setMode("light");
        }
    }, [prefersDarkMode]);

    //トグルボタンでテーマを切り替える
    const colorMode = React.useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode: string) => (prevMode === "light" ? "dark" : "light"));
        },
    }
    ), []);

    //localStorageに保存
    React.useEffect(() => {
        if (mode === "dark") {
            localStorage.setItem("colorMode", "dark");
        } else {
            localStorage.setItem("colorMode", "light");
        }
    }, [mode]);

    // テーマの適応とダークモード時の背景
    const Theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                }
            }),
        [mode],
    );

    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={Theme}>
                    <CssBaseline />

                    <Header
                        title="OIT Tools"
                        url="https://oit.yashikota.com"
                    />

                    <Routes>
                        <Route path="/" element={<BusTimetable />} />
                        <Route path="/about" element={<About />} />
                    </Routes>

                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    );
}
