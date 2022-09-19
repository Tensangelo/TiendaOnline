import React from "react";
// Components
import ProductDetails from "@components/products/ProductDetails";

const { URL } = process.env;

// export async function getStaticPaths() {
//     const response = await fetch (URL + `/api/products/allProducts`);
//     const { data }: TAPIProductResponse = await response.json();

//     const paths = data.map(({ id }) => ({ params: { id } }))

//     return {
//         paths,
//         fallback: false,
//     }
// }

// export async function getStaticProps({ params }: any) {
//     const response = await fetch (URL + `/api/products/${params?.id}`)

//     const product = await response.json();
//     return { props: { product } }
// }

const FetchAPI = async ({id} : any) => {
    const response = await fetch(URL + `/api/products/${id}`)
    const product = await response.json();

    return { props: { product } }
}

export async function getServerSideProps({query}:any) {
    const initialResult = await (FetchAPI(query));

    return {
        props: {
            initialResult,
        },
    }
}

const ProductId = ({ initialResult }: any) => {
    const Data = initialResult.props?.product;

    return (
        <>
            {Data == null ? null : <ProductDetails product={Data} />}
        </>
    )
}

export default ProductId