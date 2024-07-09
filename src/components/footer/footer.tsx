import styles from './footer.module.css';
import Image from 'next/image';

function Footer(){
    return(
        <footer className={styles.footerbackground}>
        <div className={styles.footerWrapper}>
        
            <div>
                <ul className={styles.footerSection}>
                    <li>Legal</li>
                    <li>Claims</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>

            <div>
                <ul className={styles.footerSection}>
                    <li>Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>jobs</li>
                    <li>Press</li>
                </ul>
            </div>

            <div>
                <ul className={styles.footerSection}>
                    <li>Support</li>
                    <li>Price</li>
                    <li>Guides</li>
                    <li>Contact us</li>
                    <li>Chat with us</li>
                </ul>
            </div>

            <div>
                <ul className={styles.footerSection}>
                    <li>Solution</li>
                    <li>Marketing</li>
                    <li>Analytics</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
            </div>

            <div className={styles.newsletter}>
                <p className={styles.subscribe}>Subscribe to our newsletter</p>
                <p className={styles.subscribedetails}>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <input type='email' placeholder='Enter your email' className={styles.input}/>
                <button className={styles.button}>Subscribe</button>
            </div>


        </div>
        <hr className={styles.line}/>
        <div className={styles.rightreserved}>
            <p>© 2020, your Company, Inc. All Rights Reserved.</p>
            <div>
                    <Image className={styles.media}
                    src='/instagram.svg'
                    alt='instagram logo'
                    width={16.67}
                    height={16.67}
                    />
                    <Image className={styles.media}
                    src='/x.svg'
                    alt='x logo'
                    width={16.67}
                    height={16.67}
                    />
                    <Image className={styles.media}
                    src='/github.svg'
                    alt='github logo'
                    width={16.67}
                    height={16.67}
                    />
                    <Image 
                    src='/facebook.svg'
                    alt='facebook logo'
                    width={16.67}
                    height={16.67}
                    />
            </div>
        </div>
        </footer>
    )
}

export default Footer