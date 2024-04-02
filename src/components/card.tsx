import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import WifiTetheringOffIcon from "@mui/icons-material/WifiTetheringOff";

export interface Bus {
    BusStop: string;
    Stand: string;
    Name: string;
    IsSignal: boolean;
    OnTime: string;
    EstimatedTime: string;
    MoreMinutes: string;
    DelayMinutes: number;
    System: string;
    Destination: string;
}

export const CardComponent = (props: Bus) => {
    const {
        BusStop,
        Stand,
        Name,
        IsSignal,
        OnTime,
        EstimatedTime,
        MoreMinutes,
        DelayMinutes,
        System,
        Destination,
    } = props;
    return (
        <Card
            sx={{
                minWidth: "50%",
                maxWidth: "95%",
                margin: "auto",
                border: 1,
                my: "1.5vh",
            }}
        >
            <CardContent>
                {IsSignal ? <WifiTetheringIcon /> : <WifiTetheringOffIcon />}
                <Typography variant="body2" color="text.secondary">
                    定刻 : {OnTime},{" "}
                    {DelayMinutes === 0 ? "定時運行中" : `遅れ${DelayMinutes}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Stand === "OIT"
                        ? `${BusStop} → ${Name}`
                        : `${Name} → ${BusStop}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    [{System}] {Destination} 行き
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    margin="auto"
                    textAlign="center"
                >
                    {EstimatedTime}到着予定,{" "}
                    {MoreMinutes === "まもなく到着"
                        ? "まもなく到着"
                        : `残り${MoreMinutes}`}
                </Typography>
            </CardContent>
        </Card>
    );
};
