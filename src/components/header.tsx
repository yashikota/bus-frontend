import * as React from 'react';
import { Button, Link as MuiLink, styled, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness3";
import IconButton from '@mui/material/IconButton/IconButton';
import { ColorModeContext } from '../app';
import { Link } from "react-router-dom";

const CustomAppBar = styled(AppBar)({
    position: "fixed",
    minHeight: "35px",
});

const CustomToolBar = styled(Toolbar)({
    minHeight: '35px',
    backgroundColor: "#00a1ea"
});

const CustomLink = styled(MuiLink)({
    textDecoration: "none",
    color: "black",
});

export const Header = (props: { title: string; url?: string; }) => {
    const { title, url } = props;

    const [returntop, setReturntop] = React.useState(false);
    const onClickReturnTop = () => setReturntop(!returntop);

    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const currentPath = window.location.pathname;
    const isTopPage = currentPath === "/";

    return (
        <>
            <Box>
                <CustomAppBar>
                    <CustomToolBar>
                        <Typography
                            variant="h5"
                            component="div"
                            color="inherit"
                            sx={{ flexGrow: 1 }}>
                            <CustomLink
                                target="_blank"
                                rel="noopener"
                                href={url}>
                                {title}
                            </CustomLink>
                        </Typography>
                        <Button
                            onClick={onClickReturnTop}
                            variant="outlined"
                            size="small"
                            component={Link}
                            {...isTopPage ? { to: "./about" } : { to: "./" }}
                            sx={{ mr: "20px", color: "black", borderColor: "black" }}>
                            {isTopPage ? "about" : "戻る"}
                        </Button>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            sx={{ color: "black" }}>
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness2Icon />}
                        </IconButton>
                    </CustomToolBar>
                </CustomAppBar>
                <CustomToolBar />
            </Box>
        </>
    );
}
