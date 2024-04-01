import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BusTimetable() {
    const [value, setValue] = React.useState(0);
    const [time, setTime] = React.useState(new Date());

    // 現在時刻を1秒ごとに更新
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Box component="section" sx={{ mt: 2, p: 2 }}>
                <Typography variant="h5" component="h1" align="left">
                    {time.toLocaleTimeString()}
                </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="樟葉 → OIT" {...a11yProps(0)} />
                        <Tab label="OIT → 樟葉" {...a11yProps(1)} />
                        <Tab label="長尾 → OIT" {...a11yProps(2)} />
                        <Tab label="OIT → 長尾" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                </CustomTabPanel>
            </Box>
        </Container>
    );
}
