

import React from 'react'
import { Button ,Typography} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { active } from '../../Store/actions/Categoeries_Act';


function Categories(props) {
    const dispatch = useDispatch()
    return (
        <>
        <div>
            <Typography variant="h5" component='h4'> Browse A Category: </Typography>
            <Button style={{ margin: '20px 10px' }} id="card-buttons" size="small" variant="contained" color="primary" onClick={() => dispatch(active('Electronics'))}>Electronics</Button>
            <Button style={{ margin: '20px 10px' }} size="small" variant="contained" color="primary" onClick={() => dispatch(active('Food'))}>Food</Button>
        </div>
        </>
    )
}


export default Categories