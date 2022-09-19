// Components
import CartItemList from "@components/shopCart/ItemList";
import CartSummary from "@components/shopCart/CartSummary";
import { useCart, useCartMutations } from "@context/shop";
// Styles
import Styles from '@styles/cart/Cart.module.scss';

const Cart = () => {
    const { items, count, price } = useCart();
    const { removeFromCart } = useCartMutations();

    return (
        <section className={Styles.containerCart}>
            <CartItemList items={items} removeFromCart={removeFromCart} />
            <CartSummary totalAmount={price} totalCount={count} />
        </section>
    )
}

export default Cart;