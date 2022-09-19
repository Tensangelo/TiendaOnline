import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
// Components
import ProductDetails from "@components/products/ProductDetails";

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch (`http://localhost:3000/api/products/allProducts`);
    const { data }: TAPIProductResponse = await response.json();

    const paths = data.map(({ id }) => ({ params: { id } }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const response = await fetch (`http://localhost:3000/api/products/${params?.id}`)

    const product = await response.json();
    return { props: { product } }
}

const ProductId = ({ product }: { product: TProduct }) => {
    return (
        <>
            {product == null ? null : <ProductDetails product={product} />}
        </>
    )
}

export default ProductId