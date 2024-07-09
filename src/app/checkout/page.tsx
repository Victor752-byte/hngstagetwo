import styles from './checkout.module.css';
import Image from 'next/image';

function CheckOut(){
    return(
        <div className={styles.checkoutpage}>
        
        <div className={styles.checkoutbox}>

        <div className={styles.checkoutbox1}>

            <div className={styles.padding}>
            <div className={styles.flex}>
                <div className={styles.flex1}>
                <Image src="./verified-badge-fill.svg" width={24} height={24} alt='verified'/>
                <span className={styles.deliveryinfo}>&nbsp;Customer Address</span>
                </div>
                <div className={styles.flex1}>
                    <span className={styles.proceedterms}>Change</span>
                    <Image src="./arrow-right-s-line.svg" width={24} height={24} alt='verified'/>
                </div>
            </div>
            <hr/>

            <p>KRISHINA LEROY</p>
            <p>St Catherine| Lagos - Ikeja| +234908873099</p><br/>

            <div className={styles.flex}>
                <div className={styles.flex1}>
                <Image src="./verified-badge-fill.svg" width={24} height={24} alt='verified'/>
                <span className={styles.deliveryinfo}>&nbsp;Delivery Details</span>
                </div>
                <div className={styles.flex1}>
                    <span className={styles.proceedterms}>Change</span>
                    <Image src="./arrow-right-s-line.svg" width={24} height={24} alt='verified'/>
                </div>
            </div>
            </div>

            <p>KRISHINA LEROY</p>
            <p>St Catherine| Lagos - Ikeja| +234908873099</p>


            <div className={styles.deliverysection}>
            <div className={styles.flex1}>
                <Image src="./truck.svg" width={24} height={24} alt='verified'/>
                <span className={styles.deliveryinfo}>&nbsp;Pick-up Station</span>
                </div>
                <hr/>
                <span className={styles.deliveryinfo}>&nbsp;Pick-up Station</span>
                <p className={styles.pickupinfo}>Delivery between 11 July and 13 July</p>
                <p className={styles.pickupinfo}>Head Office Idumota, Lagosy</p>
                <p className={styles.pickupinfo}>No 16 Saf City Shop in between slots Market Idumota, Lagos Building 38</p>
            </div>

            <div className={styles.deliverysection}>
            <div className={styles.flex1}>
                <Image src="./truck.svg" width={24} height={24} alt='verified'/>
                <span className={styles.deliveryinfo}>&nbsp;Shipment</span>
                </div>
                <hr/>
                <span className={styles.deliveryinfo}>&nbsp;Delivery</span>
                <p className={styles.pickupinfo}>Delivery between 11 July and 13 July</p>
                <div className={styles.flex1}>
                <Image  src="/image 38.svg" width={60} height={60} alt="image"/>
                <div>
                    <p className={styles.quan}>Furniture dinning table 5 sets Italian metal silk <br/><span className={styles.quant}>Quantity 1</span></p>
                </div>
                </div>
                <div className={styles.flex1}>
                <Image  src="/image 3 (1).svg" width={60} height={60} alt="image"/>
                <div>
                    <p className={styles.quan}>Exclusive royal dinning table made with famous Russia wood  <br/><span className={styles.quant}>Quantity 2</span></p>
                </div>
                </div>
                <hr/>
                </div>
                <div>
                <div className={styles.flex1}>
                <Image src="./verified-badge-fill.svg" width={24} height={24} alt='verified'/>
                <span className={styles.deliveryinfo}>&nbsp;Payment Method</span>
                </div>
                <hr/>
                <div className={styles.flex1}>
                <Image src="/verified-badge-fill.svg" width={24} height={24} alt='verified'/>
                <span className={styles.deliveryinfo}>&nbsp;Pay Now</span>
                </div>

                <div className={styles.flex1}>
                    <p className={styles.paywith}>Pay instantly and securely from your  credit/debit card</p>
                    <div>
                    <Image src="/logos_mastercard.svg" width={24} height={20} alt='mastercard logo' className={styles.pay} />
                    <Image src="/logos_visa.svg" width={20} height={20} alt='visa logo' className={styles.pay}  />
                    <Image src="/opay.svg" width={20} height={20} alt='visa logo' className={styles.pay}  />

                    </div>
                </div>

                <div className={styles.flex1}>
                <span className={styles.circle}></span>
                <span className={styles.deliveryinfo}>&nbsp;Bank Transfer</span>
                </div>

                
                    <p className={styles.paywith}>You will be redirected to our secure checkout page</p>

            </div>

        </div>

        <div className={styles.receipt}>
                <div className={styles.flex}>
                    <p className={styles.checkoutpoint}>Order Summary</p>
                    <p className={styles.checkoutpoint}>3 items</p>
                </div>
                <hr className={styles.receiptline}/>
                <div className={styles.flex}>
                    <p className={styles.checkoutpoint}>Delivery Charges</p>
                    <p className={styles.checkoutpoint}>₦50,000.00</p>
                </div>
                <hr className={styles.receiptline}/>
                <div className={styles.flex}>
                    <p className={styles.checkoutpoint}>Subtotal</p>
                    <p className={styles.checkoutpoint}>₦1,839,898</p>
                </div>
                <hr className={styles.receiptline}/>
                <div className={styles.flex}>
                    <p className={styles.checkoutpoint}>Total</p>
                    <p className={styles.checkoutpoint}>₦1,889,898</p>
                </div>
                <hr className={styles.receiptline}/>
                <p className={styles.charges}>Delivery charges included</p>
                <button className={styles.button}>Continue to Checkout</button>
                <hr className={styles.receiptline}/>
                <p className={styles.proceedtext}>By proceeding, you are automatically accepting our <span className={styles.proceedterms}>terms and conditions</span></p>

                
            </div> 
        </div>

        </div>
    )
}
export default CheckOut;