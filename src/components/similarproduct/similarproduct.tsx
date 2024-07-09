import styles from './similarproduct.module.css';
import Image from 'next/image';
import { FC } from 'react';

interface ProductProps{
    image: string,
    description: string,
    price: string,
    oldprice: string,
    discount:string,
    ratings?: string,
}

const SimilarProduct: FC<ProductProps> = ({image, description, price, oldprice, discount, ratings}) =>{
    return(
        <div className={styles.product}>

        <Image  src={image} width={280} height={196} alt="image" className={styles.image}/ >
        <span className={styles.discount}>{discount} </span>

        <p className={styles.desc}>{description} </p>
        <p className={styles.desc}>{price} </p>
        <span className={styles.oldprice}>{oldprice} </span>
        
        
        </div>
    )
}
export default SimilarProduct;