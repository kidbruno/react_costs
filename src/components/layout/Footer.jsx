// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    
    return(
        
    //    <Footer className={styles.footer}>
    //         <ul className={styles.social_list}>
    //             <li>
    //                 <FaFacebook />
    //             </li>
    //             <li>
    //                 <FaInstagram />
    //             </li>  
    //             <li>
    //                 <FaLinkedin />
    //             </li>  
    //         </ul>
    //         <p><span>Costs</span> &copy; 2023</p>
    //    </Footer>

    <footer className={styles.footer}>
        <p className={styles.copy_right}>
            <span>Costs</span> &copy; 2023
        </p> 
    </footer>
    )
}

export default Footer