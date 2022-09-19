import React from "react";
// Styles
import Styles from '@styles/cart/Cart.module.scss';
import Link from "next/link";

type CartSummaryProps = {
    totalAmount: number;
    totalCount: number;
}

const CartSummary = ({ totalAmount, totalCount }: CartSummaryProps) => {

    const Money = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    });

    const totalAmountCOP = Money.format(totalAmount);

    let SerialPayment = Math.random().toString(36).substring(0, 9);

    return (
        <>
            {totalCount !== 0 && (
                <section className={Styles.CartSummary}>
                    <h2>
                        Sub total ({totalCount} items):
                    </h2>
                    <p>{totalAmountCOP}</p>
                    <Link href={`/forms/${SerialPayment}`} passHref>
                        <a>Proceed to checkout</a>
                    </Link>
                </section>
            )}
        </>
    )
}

export default CartSummary;