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
    borderRadius: 9,
    border: 0,
    color: 'white',
    height: 608,
    padding: '0 10px',
    marginTop:'10rem',
    marginBottom:'1px',
    marginLeft:'-2px',
    backgroundColor: '#373b44',
    color:'rgb(122, 124, 126)',
    
   
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
          height="50%"
          width="50%"
          image={'https://cdn.shopify.com/s/files/1/1258/3447/products/BlankPoster_2000x2000_013WoobieDetails_1024x1024@2x.jpg?v=1603287592' }
          title="Contemplative Reptile"
          borderRadius="{50}%"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h6">
            
          </Typography>
          <Typography variant="body2" color="textprimary" component="p">
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