import Link from 'next/link';
import styles from './navigation.module.css';
import Image from 'next/image';

function Navigation(){
    return (
        <>
        <nav className={styles.navWrapper}>
            <div className={styles.navcontainer}>

                <div>
                    <ul className={styles.logo}>
                        <li className={styles.menuicon}>
                        <Image src='/menu.svg'
                                    alt='menu'
                                    width={24}
                                    height={24}
                                 />
                        </li>
                        <li>
                            <Link href="/">
                        <Image className={styles.logoimage} 
                    src='/logo.svg'
                    alt='logo'
                    width={24}
                    height={24}
                    />
                    </Link>
                        </li>
                        
                        <li>
                        <Link href="/" className={styles.home}>Furniflex</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className={styles.menulink}>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                    </ul>
                </div>

                <div className={styles.menulinktwoWrapper}>

                    <div>
                        <ul className={styles.menulinktwo}>
                            <li>
                               <Image src='/user.svg'
                                    alt='logo'
                                    width={24}
                                    height={24}
                                 />
                            </li>
                            <li>Krishina</li>
                            <li>
                                <Image src='/arrow-down-01.svg'
                                     alt='logo'
                                     width={24}
                                     height={24}
                                /> 
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className={styles.menulinktwo}>
                            <li>
                               <Image src='/help-circle Hover.svg'
                                    alt='help icon'
                                    width={24}
                                    height={24}
                                 />
                            </li>
                            <li>Help</li>
                            <li>
                                <Image src='/arrow-down-01.svg'
                                     alt='down arrow icon '
                                     width={24}
                                     height={24}
                                /> 
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className={styles.menulinktwo}>
                            <li>
                               <Image src='/favourite.svg'
                                    alt='love icon'
                                    width={24}
                                    height={24}
                                 />
                            </li>
                            <li>Wishlist</li>
                        </ul>
                    </div>

                    
                    <div>
                    <Link href="/cart" className={styles.Link}>
                        <ul className={styles.menulinktwo}>
                            <li>
                               <Image src='/Component 1.svg'
                                    alt='cart icon'
                                    width={24}
                                    height={24}
                                 />
                            </li>
                            <li>Cart</li>
                        </ul>
                        </Link>
                    </div>
                    

                    </div>
                    
                    <div className={styles.mobilemenuWrapper}>
                    
                    <ul className={styles.mobilemenu}>
                        <li>
                        <Image src='/user.svg'
                                    alt='cart icon'
                                    width={21}
                                    height={24}
                                 />
                        </li>
                        <li>
                            <Link href="/cart">
                        <Image src='/Component 1.svg'
                                    alt='cart icon'
                                    width={21}
                                    height={24}
                                 />
                                 </Link>
                        </li>
                        <li>
                        <Image src='/search-normal.svg'
                                    alt='cart icon'
                                    width={21}
                                    height={24}
                                 />
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

        </>
    );
}

export default Navigation;