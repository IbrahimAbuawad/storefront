import React, { useEffect } from 'react';
import { Paper, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions, CardMedia, Container } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Store/actions/Cart_Act';
import { getProduct } from '../../Store/actions/Product_Act'


const ProductsViewer = () => {
    const dispatch = useDispatch()

    const state = useSelector(state => state)
    useEffect(() => {

        dispatch(getProduct())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        dispatch(getProduct())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.cart])


    console.log('allProduct', state.products);

    return (
        <>
            <Container maxWidth='lg'>
                <Paper className="paper" elevation={1}>
                    <Grid spacing={4} container justify="center" >
                        {state.products.allProducts.map((product, index) => {
                            if (product.category === state.products.activeProduct) {
                                return (

                                    <Grid item key={index}>
                                        <Card>
                                            <CardHeader title={product.name} />
                                            <CardMedia
                                                image='https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif'
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