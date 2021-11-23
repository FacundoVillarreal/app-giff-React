import { Link } from "wouter";
import './styles.css'
import { ListItem, ListItemText, List, Grid, Typography } from "@mui/material";



export default function Category({ name, options }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                    {name}
                </Typography>
                <List sx={{display: "inline-flex", flexDirection:"column"}}>
                    {options.map(item => (
                        <ListItem>
                            <Link to={`/search/${item}`}>
                                <ListItemText sx={{cursor: "pointer", color:"red"}}
                                    primary={`${item}`}
                                />
                            </Link>
                        </ListItem>
                        ))}
                </List>
            </Grid>
        </Grid>



    )
}