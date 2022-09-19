import React, { useEffect, useState } from "react";
// Components
import AllProducts from "@components/products/AllProducts";

const fetchAPI = async () => {
    const res = await fetch(`https://tienda-online-kappa.vercel.app/api/products/allProducts`)
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