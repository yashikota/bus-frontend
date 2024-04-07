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
        // EstimatedTime,
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
                    variant="h6"
                    component="div"
                    margin="auto"
                    textAlign="center"
                >
                    {OnTime}発 [{System}]
                </Typography>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    margin="auto"
                    textAlign="center"
                >
                    {Destination} 行き
                </Typography>

                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    margin="auto"
                    textAlign="center"
                >
                    {Stand === "OIT"
                        ? `${BusStop} → ${Name}`
                        : `${BusStop} ${Name} → ${Stand}`}
                </Typography>

                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    margin="auto"
                    textAlign="center"
                >
                    {/* {EstimatedTime}到着予定,{" "} */}
                    {MoreMinutes === "まもなく到着" ? "まもなく到着" : MoreMinutes === "到着済" ? "到着済" : `${MoreMinutes}後にバスが来ます`}
                </Typography>

                <Typography
                    gutterBottom
                    variant="h6"
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
