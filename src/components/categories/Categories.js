

import React from 'react'
import { Button ,Typography} from '@material-ui/core'
import { connect } from 'react-redux';
import { active } from '../../Store/Categoeries';

function Categories(props) {
    return (
        <div>
            <Typography variant="h5" component='h4'> Browse A Category: </Typography>

            <Button style={{ margin: '20px 10px' }} id="card-buttons" size="small" variant="contained" color="primary" onClick={() => props.active('Electronics')}>Electronics</Button>
            <Button style={{ margin: '20px 10px' }} size="small" variant="contained" color="primary" onClick={() => props.active('Food')}>Food</Button>
        </div>
    )
}

const mapDispatchToProps = { active }

export default connect(null, mapDispatchToProps)(Categories);