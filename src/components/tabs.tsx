import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CircularProgress, Container } from "@mui/material";
import Clock from "./clock";
import { CardComponent } from "./card";
import type { Bus } from "./card";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const getTimetables = async () => {
    const base = "https://api.bus.oit.yashikota.com/v1/all";
    // const base = "http://localhost:8080/v1/all" // DEBUG
    const query = "?source=app";
    const url = new URL(base + query);
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

export default function BusTimetable() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [kuzuhaOIT, setKuzuhaOIT] = React.useState<Bus[]>([]);
    const [OITKuzuha, setOITKuzuha] = React.useState<Bus[]>([]);
    const [nagaoOIT, setNagaoOIT] = React.useState<Bus[]>([]);
    const [OITNagao, setOITNagao] = React.useState<Bus[]>([]);
    const [HirakataOIT, setHirakataOIT] = React.useState<Bus[]>([]);
    const [OITHirakata, setOITHirakata] = React.useState<Bus[]>([]);

    const busRoutes = [
        { buses: kuzuhaOIT, label: "樟葉 → OIT" },
        { buses: OITKuzuha, label: "OIT → 樟葉" },
        { buses: nagaoOIT, label: "長尾 → OIT" },
        { buses: OITNagao, label: "OIT → 長尾" },
        { buses: HirakataOIT, label: "枚方 → OIT" },
        { buses: OITHirakata, label: "OIT → 枚方" },
    ];

    const renderTabPanel = (buses: Bus[], index: number) => {
        if (!buses) {
            return (
                <CustomTabPanel value={value} index={index}>
                    <Typography>バスの情報がありません</Typography>
                </CustomTabPanel>
            );
        }
        if (buses.length === 0) {
            return (
                <CustomTabPanel value={value} index={index}>
                    <CircularProgress />
                    <Typography>
                        バスの情報を取得中です。10秒ほどお待ち下さい。
                    </Typography>
                </CustomTabPanel>
            );
        }

        return (
            <CustomTabPanel value={value} index={index}>
                {buses.map((bus: Bus) => (
                    <CardComponent
                        BusStop={bus.BusStop}
                        Stand={bus.Stand}
                        Name={bus.Name}
                        IsSignal={bus.IsSignal}
                        OnTime={bus.OnTime}
                        EstimatedTime={bus.EstimatedTime}
                        MoreMinutes={bus.MoreMinutes}
                        DelayMinutes={bus.DelayMinutes}
                        System={bus.System}
                        Destination={bus.Destination}
                    />
                ))}
            </CustomTabPanel>
        );
    };

    React.useEffect(() => {
        const fetchTimetables = async () => {
            const data = await getTimetables();
            setKuzuhaOIT(data.BusTimetables["Kuzuha-OIT"]);
            setOITKuzuha(data.BusTimetables["OIT-Kuzuha"]);
            setNagaoOIT(data.BusTimetables["Nagao-OIT"]);
            setOITNagao(data.BusTimetables["OIT-Nagao"]);
            setHirakataOIT(data.BusTimetables["Hirakata-OIT"]);
            setOITHirakata(data.BusTimetables["OIT-Hirakata"]);
        };

        fetchTimetables();
        const fetchInterval = 70000; // 70秒
        const intervalId = setInterval(fetchTimetables, fetchInterval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container>
            <Box
                component="section"
                sx={{
                    mt: 2,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h5" align="left">
                    <Clock />
                </Typography>
                <Typography variant="subtitle1" align="right">
                    メンテナンス中です🙇
                </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="樟葉 → OIT" {...a11yProps(0)} />
                        <Tab label="OIT → 樟葉" {...a11yProps(1)} />
                        <Tab label="長尾 → OIT" {...a11yProps(2)} />
                        <Tab label="OIT → 長尾" {...a11yProps(3)} />
                        <Tab label="枚方 → OIT" {...a11yProps(4)} />
                        <Tab label="OIT → 枚方" {...a11yProps(5)} />
                    </Tabs>
                </Box>
                {busRoutes.map((route, index) =>
                    renderTabPanel(route.buses, index),
                )}
            </Box>
        </Container>
    );
}
