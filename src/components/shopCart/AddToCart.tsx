import React, { useState, useContext } from 'react'
import { useCartMutations } from '@context/shop';
// Stles
import Styles from '@styles/products/productDetails.module.scss';

type AddToCartProps = {
    product: TProduct;
}

// Tiempo de carga fake para simular un verdadero evento de carrito
const addToCartRequest = () =>
    new Promise((resolve, reject) => {
        window.setTimeout(resolve, 600)
    })

const validate = (quantity: number) => {
    let error = '';
    if (quantity < 1) error = "Can't be blank"

    return error;
}

const AddToCart = ({ product }: AddToCartProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [visible, setVisible] = useState(false);
    const { addToCart } = useCartMutations();

    const toggleMessage = () => {
        setTimeout(() => {
            setVisible(false)
        }, 1000)
    }

    const handleSubmit = async () => {
        const error = validate(quantity)
        setError(error)

        if (!error) {
            setLoading(true)
            addToCartRequest()
                .then(() => {
                    addToCart(product, quantity)
                    setLoading(false)
                    setQuantity(quantity)
                    setVisible(true)
                    toggleMessage()
                })
                .catch((err: Error) => {
                    setError(`Error: ${err}` || 'something went wrong')
                    setLoading(false)
                })
        }
    }

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setQuantity(parseInt(target.value, 10))

    const Money = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    });

    const COP = Money.format(product.price);

    return (
        <>
            <article>
                <h2>
                    {product.name}
                </h2>
                <p>
                    {COP}
                </p>
                <div className={Styles.quantity}>
                    <input
                        type={'number'}
                        min={1}
                        step={1}
                        max={product.stock}
                        placeholder='Select an amount'
                        value={quantity}
                        onChange={handleChange}
                    />
                    {!loading ? (
                        <button type="submit" onClick={handleSubmit}>
                            Add to cart
                        </button>
                    ) : (
                        <button type="submit" disabled>
                            Send...
                        </button>
                    )}
                    {visible && (
                        <p>Added to cart</p>
                    )}
                    {error && (
                        <p>{error}</p>
                    )}
                </div>
            </article>
        </>
    )
}

export default AddToCart;