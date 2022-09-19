import { useForm } from 'react-hook-form';
// Styles
import Styles from '@styles/forms/payment.module.scss';

type CartSummaryProps = {
    totalAmount: number;
    totalCount: number;
}

type FormInputs = {
    Names: string;
    LastNames: string;
    Address: string;
    Country: string;
    City: string;
    Phone: string;

    CardNumber: string;
    NameOnCard: string;
    ExpirationDateYear: string;
    ExpirationDateMonth: string;
    CVV: string;
}

const FormsPayment = ({ totalAmount, totalCount }: CartSummaryProps) => {
    const { register, handleSubmit, formState: { isSubmitSuccessful, errors } } = useForm<FormInputs>();
    const onSubmit = (data: {}) => console.log(data);

    const Money = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    });

    const Import = 325000;
    const Iva = 19 * totalAmount / 100;
    const Total = totalAmount + Import + Iva;

    const SubTotalAmountCOP = Money.format(totalAmount);
    const ImportCOP = Money.format(Import);
    const IvaCOP = Money.format(Iva);
    const TotalAmountCOP = Money.format(Total);

    return (
        <section className={Styles.containerForms}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={Styles.FormUser}>
                    <h1>User Data</h1>
                    <section className={Styles.BoxForm}>
                        <div className={Styles.BoxesInput}>
                            <h3>Names</h3>
                            <input
                                type='text'
                                {...register('Names', {
                                    required: 'Name is required',
                                    maxLength: 80,
                                })}
                            />
                            {errors.Names ? <p>{errors.Names.message}</p> : <p></p>}
                        </div>
                        <div className={Styles.BoxesInput}>
                            <h3>Last Names</h3>
                            <input
                                type='text'
                                {...register('LastNames', {
                                    required: 'LastName is required',
                                    maxLength: 80,
                                })}
                            />
                            {errors.LastNames ? <p>{errors.LastNames.message}</p> : <p></p>}
                        </div>
                        <div className={Styles.BoxesInput}>
                            <h3>Address</h3>
                            <input
                                type='text'
                                {...register('Address', {
                                    required: 'Address is required',
                                    maxLength: 80,
                                })}
                            />
                            {errors.Address ? <p>{errors.Address.message}</p> : <p></p>}
                        </div>
                        <div className={Styles.BoxesInput}>
                            <h3>Country</h3>
                            <input
                                type='text'
                                {...register('Country', {
                                    required: 'Country is required',
                                    maxLength: 80,
                                })}
                            />
                            {errors.Country ? <p>{errors.Country.message}</p> : <p></p>}
                        </div>
                        <div className={Styles.BoxesInput}>
                            <h3>City</h3>
                            <input
                                type='text'
                                {...register('City', {
                                    required: 'City is required',
                                    maxLength: 80,
                                })}
                            />
                            {errors.City ? <p>{errors.City.message}</p> : <p></p>}
                        </div>
                        <div className={Styles.BoxesInput}>
                            <h3>Phone</h3>
                            <input
                                type='text'
                                {...register('Phone', {
                                    required: 'Phone is required',
                                    maxLength: 80,
                                })}
                            />
                            {errors.Phone ? <p>{errors.Phone.message}</p> : <p></p>}
                        </div>
                    </section>
                </div>
                <div className={Styles.FormData}>
                    <h1>Add a credit or debit card</h1>
                    <section className={Styles.BoxForm}>
                        <div className={Styles.BoxesInput}>
                            <h3>Card Number</h3>
                            <input
                                type='number'
                                maxLength={16}
                                {...register('CardNumber', {
                                    required: 'CardNumber is required',
                                    maxLength: 16,
                                })}
                            />
                            {errors.CardNumber ? <p>{errors.CardNumber.message}</p> : <p></p>}
                        </div>
                        <div className={Styles.BoxesInput}>
                            <h3>Name on card</h3>
                            <input
                                type='text'
                                {...register('NameOnCard', {
                                    required: 'NameOnCard is required',
                                    maxLength: 80,
                                })}
                            />
                            {errors.NameOnCard ? <p>{errors.NameOnCard.message}</p> : <p></p>}
                        </div>
                        <div className={`${Styles.BoxesInput} ${Styles.DateExpiration}`}>
                            <h3>Expiriry Date</h3>
                            <input
                                type='number'
                                placeholder='MM'
                                min={1}
                                max={12}
                                {...register('ExpirationDateMonth', {
                                    required: 'ExpirationDateMonth is required',
                                    maxLength: 2,
                                })}
                            />
                            <input
                                type='number'
                                placeholder='YYYY'
                                min={2020}
                                max={9999}
                                {...register('ExpirationDateYear', {
                                    required: 'ExpirationDateYear is required',
                                    maxLength: 4,
                                })}
                            />
                            {errors.ExpirationDateYear ? <p>{errors.ExpirationDateYear.message}</p> : <p></p>}
                        </div>
                        <div className={Styles.BoxesInput}>
                            <h3>CVV</h3>
                            <input
                                type='password'
                                maxLength={3}
                                {...register('CVV', {
                                    required: 'CVV is required',
                                    maxLength: 3,
                                })}
                            />
                            {errors.CVV ? <p>{errors.CVV.message}</p> : <p></p>}
                        </div>
                    </section>
                </div>
                <div className={Styles.placeOrder}>
                    <h2>Order Summary</h2>
                    <div className={Styles.line}></div>
                    <div className={Styles.items}>
                        <p>Items ({totalCount}) :</p>
                        <p>{SubTotalAmountCOP}</p>
                    </div>
                    <div className={Styles.import}>
                        <p>Import Fess Deposit: </p>
                        <p>{ImportCOP}</p>
                    </div>
                    <div className={Styles.iva}>
                        <p>IVA (19%):</p>
                        <p>{IvaCOP}</p>
                    </div>
                    <div className={Styles.total}>
                        <p>Order Total:</p>
                        <p>{TotalAmountCOP}</p>
                    </div>
                    {!isSubmitSuccessful ? (
                        <button type={'submit'}>
                            Place your order
                        </button>
                    ) : (
                        <p className={Styles.purchse}>Successful purchase</p>
                    )}
                </div>
            </form>
        </section>
    )
}

export default FormsPayment;