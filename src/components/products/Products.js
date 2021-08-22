import React from 'react';
import { Paper, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions, CardMedia } from '@material-ui/core'
import { connect } from 'react-redux';
import { inactive, active } from '../../Store/Categoeries';
import { getProducts } from '../../Store/Products';


const productsViewer = (props) => {
    return (
        <>
            <Paper className="paper" elevation={1}>
                <Grid spacing={4} container justify="center" >
                    {props.products.productList.map((product, index) => {
                        if (product.category === props.activatedCategory) {

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
                                            <Typography variant="p" component="p"> ${product.price}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="outlined"> Add to Cart </Button>
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
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products, activatedCategory: state.categories.activatedCategory
    }
}

const mapDispatchToProps = {
    inactive,
    active,
    getProducts,
}


export default connect(mapStateToProps, mapDispatchToProps)(productsViewer);