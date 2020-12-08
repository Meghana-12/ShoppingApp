import { Button, CardHeader, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import Cards from './Cards';
import { useStateValue } from './StateProvider';
import Card from '@material-ui/core/Card'
const useStyles = makeStyles({
    root: {
        display: 'flex',
        margin: '5rem',
    },
    list: {
        display: 'flex',
        direction: 'column',
        flex: 2,
    },
    subtotal: {
        padding: "2rem",
       borderBlockColor: "#ffff",
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-between',
    }

});

function Checkout() {
    const classes = useStyles();
    const [{cart}] = useStateValue();
    const [sum, setSum] = useState(0);
    React.useEffect(() => {
        cart.map(item => (
            setSum(sum+item.price)
        ))
    }, [cart])
    return (
        <div className={classes.root}>
            <div className={classes.list}>
            {cart?.length === 0 ? (
                <div>
                <h2>You Cart is Empty 😞 </h2>
                </div>
            ):
            <div>
                <h2>Your Cart 🙂 : </h2>
                <br/>
                {cart.map(item => (
                    <Cards function="remove"/>
                ))}    
            </div>
            }
            </div>

            <div className={classes.subtotal}>
                <h3>Subtotal ({cart.length} items): $ {sum}</h3>
                <div style={{marginTop: "2rem"}}>
                        <Button variant="contained" color="primary">
                            Proceed to Checkout!      
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
