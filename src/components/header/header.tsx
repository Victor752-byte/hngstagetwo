import styles from './header.module.css';
import Image from 'next/image';

function Header(){
    return(
        <>

        <div className={styles.header}>
            <div className={styles.heroctaWrapper}>
            
        <div className={styles.herocta}>
            <p className={styles.herotext}>Transform Your Home with Elegance and Comfort</p>
            <p className={styles.herodetails}>Discover our exquisite collection of furniture designed to elevate your living spaces.</p>
            <button type='submit' className={styles.button}>Order Now</button>
        </div>
            </div>
        </div>

        <div className={styles.mobileheader}>
        <Image  src="/mobilepic.svg" width={398} height={300} alt="mobilebackground"/>
        <p className={styles.mobileherotext}>Transform Your Home with <span>Elegance and Comfort</span></p>
        <p className={styles.mobileherotextdetail}>Discover our exquisite collection of furniture designed to elevate your living spaces.</p>
        <button type='submit' className={styles.button}>Order Now</button>
        </div>
        </>
    )
}

export default Header;