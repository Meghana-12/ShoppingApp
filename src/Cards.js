import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FavoriteRounded } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    flex:"1",
    padding: "1rem",
    margin: '0.5rem',
    zIndex:3,
  
  },
  button: {
      display: "flex",
      justifyContent: 'center',
      marginTop: '1rem',

  },
  subheader:{
      display: "flex !important",
      justifyContent: 'space-between !important',
      alignItems: 'center !important',
      flexWrap: 'wrap',
  },
  image: {
      objectFit: "contain",
  },
  price: {
      textAlign: 'center',
      margin: '0.5rem',
  },

});

export default function Cards(props) {
  const classes = useStyles();
  const [{cart}, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: props.id,
        title: props.name,
        image: props.image,
        price: props.price,
        rating:props.rating,
      }
    })
  }
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: props.id
    })
  }
  return (
    <Card className={classes.root}>
        <div className={classes.header}>
          <Typography gutterBottom component="h6" style={{fontSize: '1rem'}}>
            {props.name || "Justice League | Volume 1" }
          </Typography>
         </div>
          <div className={classes.subheader}>
              <div>
                {
                    Array(props.rating || 3)
                    .fill()
                    .map((_) => (
                        <span> 🔥 </span>
                    ))
                }
            </div>
          <IconButton variant="contained" color="primary">
          <FavoriteRounded/>
        </IconButton>
        </div>
        <CardMedia
          component="img"
          alt={props.name || "image"}
          height="140"
          image={props.image || "https://images-na.ssl-images-amazon.com/images/I/516U11XAuqL._SX331_BO1,204,203,200_.jpg"}
          title={props.name}
          className={classes.image}
        />
        <div className={classes.price}>
            <Typography variant="body2" color="textSecondary" component="p">
                $ {props.price || "500"}
            </Typography>
        </div>
        {props.function === "remove" ?  (
      <div className={classes.button}>
        <Button size="small" variant="contained" color="primary" onClick={removeFromCart}>
            Remove from Cart
        </Button>
        </div> 
          ) : (
        <div className={classes.button}>
          <Button size="small" variant="contained" color="primary" onClick={addToCart}>
                Add to Cart
            </Button>
        </div>
        )}
    </Card>
  );
}
