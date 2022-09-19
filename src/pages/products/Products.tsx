import React, { useEffect, useState } from "react";
// Components
import AllProducts from "@components/products/AllProducts";

const fetchAPI = async () => {
    const res = await fetch(`http://localhost:3000/api/products/allProducts`)
    const { data } = await res.json();

    return data;
}

export async function getServerSideProps() {
    const initialResult = await fetchAPI();

    return {
        props: {
            initialResult,
        },
    }
}

const Products = ({ initialResult}: any) => {
    const DataProducts = initialResult;

    return (
        <>
            <AllProducts {...DataProducts} />
        </>
    )
}

export default Products;