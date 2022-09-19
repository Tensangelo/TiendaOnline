import Image from "next/image";
import React from "react";
// Components
import AddToCart from '@components/shopCart/AddToCart';
// Stles
import Styles from '@styles/products/productDetails.module.scss';

type ProductDetailsData = {
    product: TProduct;
}

const ProductDetails = ({ product }: ProductDetailsData) => {
    const { images, detail, stock } = product;

    return (
        <section>
            <div className={Styles.containerDetail}>
                <div className={Styles.HeroDetail}>
                    <picture>
                        <Image
                            src={images}
                            alt='Imagen del producto'
                            layout={'fill'}
                        />
                    </picture>
                    {stock !== 0  && (
                        <AddToCart product={product} />
                    )}

                </div>
                <div className={Styles.line}></div>
                <article className={Styles.details}>
                    <h3>About this item</h3>
                    <p>{detail}</p>
                </article>
                <div className={Styles.line}></div>
            </div>
        </section>
    )
}

export default ProductDetails;