import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
        // IsSignal,
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
                {/* {IsSignal ? <WifiTetheringIcon /> : <WifiTetheringOffIcon />} */}

                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    margin="auto"
                    textAlign="center"
                >
                    {OnTime}発 [{System}] {Destination} 行き
                </Typography>

                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    margin="auto"
                    textAlign="center"
                >
                    {Stand === "OIT"
                        ? `${BusStop} → ${Name}`
                        : `${Name} → ${BusStop}`}
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

                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    margin="auto"
                    textAlign="center"
                    color="error"
                >
                    {DelayMinutes === 0 ? "" : `遅れ${DelayMinutes}分`}
                </Typography>

            </CardContent>
        </Card>
    );
};
