import React from 'react';
import { Paper, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions, CardMedia, Container } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Store/actions/Cart_Act';



const ProductsViewer = () => {
    const dispatch = useDispatch()

    const state = useSelector(state => state)
    return (
        <>
            <Container maxWidth='lg'>
                <Paper className="paper" elevation={1}>
                    <Grid spacing={4} container justify="center" >
                        {state.products.productList.map((product, index) => {
                            if (product.category === state.categories.activatedCategory) {
                                console.log('From cart', state.cart.cartItems.inStock, 'From static', product.inStock);
                                return (

                                    <Grid item key={index}>
                                        <Card>
                                            <CardHeader title={product.name} />
                                            <CardMedia
                                                image={product.image}
                                                style={{ height: 0, paddingTop: '50%' }}
                                                title='title'
                                            />
                                            <CardContent>
                                                <Typography variant="p" component="p">Price : ${product.price}</Typography>
                                                <Typography variant="p" component="p">in Stock :  {product.inStock}</Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button variant="outlined" onClick={() => dispatch(addToCart(product._id, product.name, product.inStock))}> Add to Cart </Button>
                                                <Button variant="outlined"> View Details </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            } else {
                                return null;
                            }
                        })}
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}

export default ProductsViewer