


import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Store/actions/Categoeries_Act';
import { filtering } from '../../Store/actions/Product_Act';
import './category.css'

function Categories() {
    const history = useHistory();
    const handleClick = () => history.push('/addnew');
    const dispatch = useDispatch()
    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(getCategories());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <>
            <Typography variant="h5" component='h4'> Browse A Category: </Typography>


            {state.categories.categories.map((category, idx) => {
                return (
                    <>
                        <Button style={{ margin: '20px 10px' }} id="card-buttons" size="small" variant="contained" color="primary" onClick={() => dispatch(filtering(category.name))}>{category.name}</Button>
                    </>
                )
                
            })
            }
            <Button style={{ margin: '20px 10px' }} id="addItem" size="" variant="outlined" color="error" onClick={handleClick} ><Link to="/addnew">Add Items</Link></Button>
        </>
    )

}


export default Categories