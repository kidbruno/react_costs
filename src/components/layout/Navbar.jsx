import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'


function Navbar() {

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link>
                    <img src=".././logo.svg" alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link className={styles.li} to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.li} to='/projects'>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.li} to='/company'>Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.li} to='/contact'>Contato</Link>
                    </li>
                    {/* <li className={styles.item}>
                        <Link className={styles.li} to='/newproject'>Novo Projeto</Link>
                    </li> */}
                </ul>
                
            </Container>
        </nav>
    )
}

export default Navbar