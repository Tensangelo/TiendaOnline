import FormsPayment from "@components/forms/FormsPayment";
import { useCart } from "@context/shop";

const FormPayment = () => {
    const { count, price } = useCart();

    return (
        <>
            <FormsPayment totalAmount={price} totalCount={count} />
        </>
    )
}

export default FormPayment;