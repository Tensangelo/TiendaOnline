import Image from "next/image";
import React from "react";
// Styles
import Styles from '@styles/products/allProducts.module.scss';
import Link from "next/link";

interface ListProducts {
    id: TProductId;
    name: string;
    images: string;
    price: string;
    detail: string;
    category: string;
    stock: number;
}

const AllProducts = (products: ListProducts) => {

    const ListProduct = Object.values(products)

    return (
        <>
            <h2 className={Styles.Title}>Products</h2>
            <section className={Styles.containerProducts}>
                {ListProduct.map((data) => {
                    const { id, name, images, price, detail, category, stock } = data;
                    const Money = new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP'
                    });

                    const COP = Money.format(price);

                    return (
                        <Link key={id} href={`/products/[id]`} as={`/products/${id}`} passHref>
                            <a>
                                {stock !== 0 ? (
                                    <div className={Styles.containerCard}>
                                        <picture>
                                            <Image
                                                src={images}
                                                alt='Imagen del producto'
                                                layout={'fill'}
                                            />
                                        </picture>
                                        <div className={Styles.line}></div>
                                        <article>
                                            <p>{name}</p>
                                            <p>{COP}</p>
                                            <span>Disponible</span>
                                        </article>
                                    </div>
                                ) : (
                                    <div className={`${Styles.containerCard} ${Styles.disabled}`}>
                                        <picture>
                                            <Image
                                                src={images}
                                                alt='Imagen del producto'
                                                layout={'fill'}
                                            />
                                        </picture>
                                        <div className={Styles.line}></div>
                                        <article>
                                            <p>{name}</p>
                                            <p>{COP}</p>
                                            <span>Agotado</span>
                                        </article>
                                    </div>
                                )}
                            </a>
                        </Link>
                    )
                })}
            </section>
        </>
    )
}

export default AllProducts;