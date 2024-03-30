import { Container, Grid } from "@mui/material";
import { CardComponent } from "./components/card";

export const Bus = () => (
    <Container>
        <Grid
            sx={{ flexGrow: 1, my: "10px" }}
            container
            alignItems="center"
            justifyContent="center"
        >
            <Grid sx={{ m: 1 }}>
                <CardComponent
                    title="樟葉 → OIT"
                    description=""
                />
            </Grid>
            <Grid sx={{ m: 1 }}>
                <CardComponent
                    title="OIT → 樟葉"
                    description=""
                />
            </Grid>
            <Grid sx={{ m: 1 }}>
                <CardComponent
                    title="長尾 → OIT"
                    description=""
                />
            </Grid>
            <Grid sx={{ m: 1 }}>
                <CardComponent
                    title="OIT → 長尾"
                    description=""
                />
            </Grid>
        </Grid>
    </Container>
);
