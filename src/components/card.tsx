import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const CardComponent = (props: any) => {
    const { title, description } = props;
    return (
        <Card sx={{ minWidth: "50%", maxWidth: "95%", margin: "auto", border: 1 }}>
            <CardContent>
                <Typography
                    gutterBottom variant="h5"
                    component="div"
                    margin="auto"
                    textAlign="center">
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ minHeight: 60 }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
