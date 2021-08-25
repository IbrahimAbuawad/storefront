import React from 'react'
import Products from "../products/Products";
import Categories from "../categories/Categories";
import SimpleCart from "../simpleCart/SimpleCart";

function Main() {
    return (
        <>
            <br />
            <SimpleCart />
            <Categories />
            <Products />
            <br />
        </>
    )
}

export default Main
