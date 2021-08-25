import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Store/actions/Cart_Act';

import './simplecart.css'


function SimpleCart() {
    const state = useSelector(state => state)

    const dispatch = useDispatch()
    return (

        <div class='Simplecart' >
            {state.cart.cartNumbers > 0 &&
                <>
                    {state.cart.cartItems.map(items => {
                        return (
                            <List dense={false}>

                                <ListItem>

                                    <ListItemText
                                        style={{ marginRight: '25px', color: 'black' }}
                                        primary={items.name}
                                    />

                                    <IconButton onClick={() => dispatch(removeFromCart(items._id,items.inStock))} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            </List>
                        )
                    })
                    }
                </>
            }
        </div>
    )

}

export default SimpleCart
