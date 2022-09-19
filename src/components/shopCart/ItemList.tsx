import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// Context
import { CartItemType } from '@context/shop'
// Styles
import Styles from '@styles/cart/Cart.module.scss';


type CartItemListProps = {
    items: CartItemType[]
    removeFromCart: (product: TProduct) => void
    loading?: boolean
}

const CartItemList = ({ items, removeFromCart, loading = false }: CartItemListProps) => {
    if (loading) return <p>Cargando...</p>

    if (items.length === 0) {
        return (
            <section className={Styles.EmptyShopCart}>
                Your cart is empty
            </section>
        )
    }

    return (
        <section className={Styles.mainShopCart}>
            {items.map((dataProducts) => {
                const { id, name, price, quantity, images } = dataProducts;

                const Money = new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP'
                });

                const COP = Money.format(price);

                return (
                    <div key={id} className={Styles.containerCardShop}>
                        <section className={Styles.containerHeroProductShop}>
                            <picture>
                                <Image
                                    src={images}
                                    alt='Imagen de producto por comprar'
                                    layout={'fill'}
                                />
                            </picture>
                            <article>
                                <Link href={`/products/${id}`}>
                                    <a>{name}</a>
                                </Link>
                                <div className={Styles.containerQuantity}>
                                    <p>
                                        Quantity:
                                    </p>
                                    <p>{quantity} x {COP}</p>
                                </div>
                                <button type='button' onClick={() => removeFromCart(dataProducts)}>
                                    Remove
                                </button>
                            </article>
                        </section>
                        <div className={Styles.line}></div>
                    </div>
                )
            })}
        </section>
    )
}

export default CartItemList;
