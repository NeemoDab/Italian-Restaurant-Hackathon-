/* Card summary plan
- Use MUI card component
- props can be image, title, price, if we need to include an 'X' to remove item, and the props to pass to get a detailed modal up
- Layout is image, then title and cost below.
  - The tile should be a link to a modal, which comes up with more details about meal
- An API should provide the details on another component
*/

import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function numberToSterling (num) {
    return '£' + Number(num).toFixed(2)
}

export default function CardSummary({image, title, price, inBasket, modalData}) { 
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-around'}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {numberToSterling(price)}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}