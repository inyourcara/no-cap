import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import me from '../components/me.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 508,
    padding: '0 10px',
    marginTop:'0',
    marginBottom:'2rem',
    marginLeft:'-10px'
    
    
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={me}
          title="Contemplative Reptile"
          borderRadius="50%"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
            Welcome 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Self-motivated humbly looking forward a role in the tech industry finding solutions and design problems.


          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}