"use client";
import Image from "next/image"
import styles from './listitem.module.css';
import { FC } from "react";
import Link from "next/link";

interface ProductProps{
    image: string,
    description: string,
    price: string,
    oldprice: string,
    discount:string,
    ratings?: string,
    onclick?: ()=>void
}

const ListItem: FC<ProductProps> = ({image, description, price, oldprice, discount, ratings, onclick}) =>{
    return(
        <div className={styles.productWrapper}>

        <div className={styles.product}>
        <Image  src={image} width={386} height={292} alt="image"/>
        <Image className={styles.liked} src='/favourite.svg' alt='love icon' width={24} height={24} />
        </div>

        <p className={styles.desc}>{description} </p>
        <p className={styles.desc}>{price} </p>
        <div>
        <span className={styles.oldprice}>{oldprice} </span>
        <span className={styles.discount}>{discount} </span>
        </div>
        
        <div className={styles.rating}>
        <Image src="/star.svg" width={20} height={20} alt="rating" />
        <Image src="/star.svg" width={20} height={20} alt="rating" />
        <Image src="/star.svg" width={20} height={20} alt="rating" />
        <Image src="/star.svg" width={20} height={20} alt="rating" />
        <Image src="/whitestar.svg" width={20} height={20} alt="rating" />
        <span> ({ratings})</span>
        </div>
        <Link href="/addtocart">
        <button className={styles.button}>Add to cart</button>
        </Link>
        </div>
    )
}
export default ListItem;