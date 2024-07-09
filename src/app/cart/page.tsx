import Link from 'next/link';
import styles from './cart.module.css';
import Image from 'next/image';

function Cart(){
    return(
        <div className={styles.checkoutpage}>
        <div className={styles.checkoutbox}>

            <div className={styles.checkoutsection}>
                <div className={styles.mobilecarthead}>
                <p className={styles.checkoutheading}>Cart 2 (3)</p>
                <hr/>
                </div>
                <div className={styles.mobileitems}>
            <div className={styles.flex1}>

                    <div className={styles.space}>
                    <Image src="/image 38.svg" width={120} height={106} alt='cart product'/><br/>

                    <div className={`${styles.flex} ${styles.delete} ${styles.desktop}`}>
                    <Image src="/delete-02.svg" width={20} height={24} alt='cart product'/>
                    <span> &nbsp;Remove</span>
                    </div>

                    </div>
                    <div className={styles.flextext}>
                    <p className={`${styles.product} ${styles.space}`}>Furniture dinning table 5 sets Italian metal silk</p>

                    <div className={styles.flex2}>
                    <p className={styles.desc}>₦398,120.00 </p>
                    <div>
                    <span className={styles.oldprice}>₦405,000.00</span>&nbsp;&nbsp;&nbsp;
                    <span className={styles.discount}>-20%</span>
                    </div>
                    <div className={`${styles.quntitycontainer} ${styles.desktop}`}>
                    <span className={styles.quantity}>Quantity  </span>
                    <Image src="/minus-sign.png" width={12} height={5} alt='minus sign' className={styles.minus} />
                    <span className={styles.num}> 1 </span>
                    <span className={styles.plus}>&nbsp;+&nbsp;</span>
                </div>
                    </div>

                    </div>

                </div>

                    <div className={styles.mobile}>

                <div className={`${styles.flex} ${styles.delete}`}>
                    <Image src="/delete-02.svg" width={20} height={24} alt='cart product'/>
                    <span> &nbsp;Remove</span>
                    </div>
                    <div className={`${styles.quntitycontainer}`}>
                    <span className={styles.quantity}>Quantity  </span>
                    <Image src="/minus-sign.png" width={12} height={5} alt='minus sign' className={styles.minus} />
                    <span className={styles.num}> 1 </span>
                    <span className={styles.plus}>&nbsp;+&nbsp;</span>
                </div>

            </div>
                <hr className={styles.desktop} />
                </div>

                <div className={styles.mobileitems}>
                <div className={styles.flex1}>

                    <div className={styles.space}>
                    <Image src="/image 3 (1).svg" width={120} height={106} alt='cart product'/><br/>

                    <div className={`${styles.flex} ${styles.delete} ${styles.desktop}`}>
                    <Image src="/delete-02.svg" width={20} height={24} alt='cart product'/>
                    <span> &nbsp;Remove</span>
                    </div>

                    </div>
                    <p className={`${styles.product} ${styles.space}`}>Exclusive royal dinning table made with famous Russia wood </p>

                    <div className={styles.flex2}>
                    <p className={styles.desc}>₦398,120.00 </p>
                    <div>
                    <span className={styles.oldprice}>₦405,000.00</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.discount}>-20%</span>
                    </div>
                    <div className={`${styles.quntitycontainer} ${styles.desktop}`}>
                    <span className={styles.quantity}>Quantity  </span>
                    <Image src="/minus-sign.png" width={12} height={5} alt='minus sign' className={styles.minus} />
                    <span className={styles.num}> 1 </span>
                    <p className={styles.plus}>&nbsp;+&nbsp;</p>
                </div>

                    </div>
                
                </div>

                <div className={styles.mobile}>

                <div className={`${styles.flex} ${styles.delete}`}>
                    <Image src="/delete-02.svg" width={20} height={24} alt='cart product'/>
                    <span> &nbsp;Remove</span>
                    </div>
                    <div className={`${styles.quntitycontainer}`}>
                    <span className={styles.quantity}>Quantity  </span>
                    <Image src="/minus-sign.png" width={12} height={5} alt='minus sign' className={styles.minus} />
                    <span className={styles.num}> 1 </span>
                    <span className={styles.plus}>&nbsp;+&nbsp;</span>
                </div>
                </div>
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
                <Link href="/checkout">
                <button className={styles.button}>Continue to Checkout</button>
                </Link>
                <hr className={styles.receiptline}/>

                <div className={styles.paymentmethod}>
                    <p>We accept</p>
                    <Image src="/logos_mastercard.svg" width={24} height={20} alt='mastercard logo' />
                    <Image src="/logos_visa.svg" width={20} height={20} alt='visa logo'  />
                </div>
                <div className={styles.security}>
                     <Image src="/lock.svg" width={20} height={20} alt='lock icon'  />
                     <p>&nbsp;&nbsp;Transaction are 100% secure</p>
                     </div>
            </div> 
                
                      

        </div>
        </div>
    )
}

export default Cart;