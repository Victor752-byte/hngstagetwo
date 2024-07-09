"use client";
import ListItem from "@/components/listItem/listitem";
import styles from './listitembody.module.css';
import data from "@/components/data/data";
import { FC, useState } from "react";


const ListItemBody=()=>{
    const [showCart, setShowCart] = useState(false);
    return(
        <div className={styles.productlistContainer}>
            <div className={styles.group}>
                <span className={styles.exclusive}>Exclusive</span>
                <span className={styles.allproduct}>All Products</span>
            </div>
        <div className={styles.productlist}>
        {
            data.map(({image, description, price, oldprice, discount, ratings})=>(
                <ListItem 
                image={image} 
                description={description}
                price={price}
                oldprice={oldprice}
                discount={discount}
                ratings={ratings}
                onclick={()=>!setShowCart}
                />
            ))
        }
        </div>
        </div>
    )
}

export default ListItemBody;