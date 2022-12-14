import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const CustomCard = ({ enroll, date, desc, payStatus, payID }) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {enroll} - {date}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Enrolled
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    {payStatus ? <Button size="small">Paid</Button> : <Button size="small">Pay</Button>}
                    {payID !==0 ? "SHOW PAYMENT ID HERE": null}
                </CardActions>
            </Card>
        </Box>
    )
}

export default CustomCard