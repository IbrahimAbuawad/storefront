import React, { useState } from 'react'
import axios from 'axios'
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";

import { Form, Button } from 'react-bootstrap'


function AddToList() {
    const history = useHistory();
    const [state, setState] = useState({
        category: 'food',
        product: '',
        inStock: 1,
        price: 1
    })

    async function addToListFunc(e) {
        e.preventDefault()
        const data = {
            "name": state.product,
            "category": state.category,
            "inStock": state.inStock,
            "price": state.price
        }
        await axios.post(`https://api-js401.herokuapp.com/api/v1/products`, data);

        history.push("/");

    }
    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }
    console.log(state);
    return (
        <>
            <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                <Form>
                    <Form.Group className="mb-3" >

                        <Form.Label>Select Category</Form.Label>
                        <Form.Select aria-label="Default select example" value={state.category} name='category' onChange={handleChange}>
                            <option value="food">Food</option>
                            <option value="electronics">Electronics</option>
                            <option value="console">Console</option>
                            <option value="mobile">Mobile</option>
                        </Form.Select>

                        <Form.Text className="text-muted">
                            It will be more categories soon
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Choose Product Name</Form.Label>
                        <Form.Control type="text" required={true} placeholder="iPhone 11 max" name='product' value={state.product} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>How Many Items Do You Have</Form.Label>
                        <Form.Control type="number" required={true} placeholder="1838" min='1' max='9000' value={state.inStock} name='inStock' onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Choose The price</Form.Label>
                        <Form.Control type="number" required={true} placeholder="$89" min='1' max='5000' value={state.price} name='price' onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" required={true} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={addToListFunc}>
                        Add To List
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default AddToList
