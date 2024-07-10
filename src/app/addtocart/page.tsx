import styles from './addtocart.module.css';
import { FC } from 'react';
import ListItem from "@/components/listItem/listitem";
import data from "@/components/data/data";
import Image from 'next/image';
import SimilarProduct from '../../components/similarproduct/similarproduct';

const AddToCart = ()=>{
    return(
        <div className={styles.cartinfo}>
        <div className={styles.cartcontainer}>

                <div className={styles.cartsection}>
                <Image  src="/image 38.svg" width={386} height={292} alt="image"/>
                <br/>
                <a href='#' className={styles.link}>Share this product</a>
                </div>

            <div className={styles.cartsection}>

                <div>
                    <p className={styles.cartdesc}>Furniture dinning table 5 sets Italian metal silk</p>
                    <hr/>
                    <span className={styles.price}>₦398,120.00</span>
                    <span className={styles.oldprice}>₦405,000.00</span>
                    <span className={styles.discount}>-10%</span>
                </div>
                <hr/>
                <div className={styles.quntitycontainer}>
                    <span className={styles.quantity}>Quantity  </span>
                    <Image src="/minus-sign.png" width={12} height={5} alt='minus sign' className={styles.minus} />
                    <span className={styles.num}> 1 </span>
                    <span className={styles.plus}>&nbsp;+&nbsp;</span>
                </div>
                <hr/>

                <Image src="/star.svg" width={20} height={20} alt="rating" />
                 <Image src="/star.svg" width={20} height={20} alt="rating" />
                <Image src="/star.svg" width={20} height={20} alt="rating" />
                <Image src="/star.svg" width={20} height={20} alt="rating" />
                <Image src="/whitestar.svg" width={20} height={20} alt="rating" />
                <span className={styles.rating}> (943 verified rating)</span>
                <hr/>
                <button className={styles.button}>Add to cart</button>
            </div>

            <div className={styles.deliverygroup}>
            <p>&nbsp; Delivery & Returns</p>
            <hr/>

            <div className={styles.deliverysection}>
            <Image src="/truck.svg" width={24} height={24} alt="rating"  className={styles.deliveryicon} />
            <div>
                <p className={styles.deliveryhead}>Delivery</p>
                <p>Estimated delivery time 2-10 business days</p>
                <p>Express Delivery Available</p>
                <p>For Same-Day-Delivery: Orders placed before 12 PM</p>
                <p>Next Day-Delivery: Orders placed after 12 PM will be delivered the next day</p>
                <p>Note: Availability may vary by location</p>
            </div>
            </div>
            <hr/>

            <div className={styles.deliverysection}>
            <Image src="/refresh-2.svg" width={24} height={24} alt="rating"  className={styles.deliveryicon} />
            <div>
                <p className={styles.deliveryhead}>Return Policy</p>
                <p>Guaranteed 7-Day Return Policy</p>
                <p>For details about return shopping options, please visit our Return Policy</p>
            </div>
            </div>
            <hr/>

            <div className={styles.deliverysection}>
            <Image src="/honour-star.svg" width={24} height={24} alt="rating"  className={styles.deliveryicon} />
            <div>
                <p className={styles.deliveryhead}>Return Warranty</p>
                <p>1 year</p>
            </div>
            </div>

            </div>

        </div>

        <div className={styles.similarproduct}>
        <a href='#' className={styles.link}>Similar Products</a>
        <div className={styles.cartcontainer}>
            {
                data.map((item, index)=>{
                    if(index == 2 || index == 5 || index == 6 || index == 1) {
                        return ( <SimilarProduct 
                            key={index}
                        image={item.image} 
                        description={item.description}
                        price={item.price}
                        oldprice={item.oldprice}
                        discount={item.discount}
                        />)
                    }
                })
            }
        </div>
        </div>
        </div>
    )
}

export default AddToCart;